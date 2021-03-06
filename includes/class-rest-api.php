<?php

namespace App;

class REST_API
{
  public function __construct()
  {
    add_action('rest_api_init', [$this, 'register_routes']);
  }

  /* Register routes with wordpress */
  public function register_routes()
  {
    /* Get quiz meta */
    register_rest_route('wp-quiz-plugin', '/quiz/(?P<id>\d+)', array(
      'methods' => 'GET',
      'callback' => [$this, 'get_quiz'],
    ));

    /* Get questions for quiz */
    register_rest_route('wp-quiz-plugin', '/quiz/(?P<id>\d+)/getQuestions', array(
      'methods' => 'GET',
      'callback' => [$this, 'get_questions'],
    ));

    /* Store user attempt */
    register_rest_route('wp-quiz-plugin', '/quiz/(?P<id>\d+)/storeAttempt', array(
      'methods' => 'POST',
      'callback' => [$this, 'store_attempt'],
    ));

    /* Create new quiz */
    register_rest_route('wp-quiz-plugin', '/admin/quiz', array(
      'methods' => 'POST',
      'callback' => [$this, 'create_quiz'],
    ));

    /* List all quizzes*/
    register_rest_route('wp-quiz-plugin', '/admin/quiz', array(
      'methods' => 'GET',
      'callback' => [$this, 'list_all_quizzes'],
    ));

    /* Update a quiz */
    register_rest_route('wp-quiz-plugin', '/admin/quiz', array(
      'methods' => 'PUT',
      'callback' => [$this, 'update_quiz'],
    ));

    /* Delete a quiz */
    register_rest_route('wp-quiz-plugin', '/admin/quiz/delete', array(
      'methods' => 'POST',
      'callback' => [$this, 'delete_quiz'],
    ));

    /* Create a new question */
    register_rest_route('wp-quiz-plugin', '/admin/question', array(
      'methods' => 'POST',
      'callback' => [$this, 'create_question'],
    ));

    /* Get all questions */
    register_rest_route('wp-quiz-plugin', '/admin/question', array(
      'methods' => 'GET',
      'callback' => [$this, 'get_all_questions'],
    ));

    /* Get single questions */
    register_rest_route('wp-quiz-plugin', '/admin/question/(?P<id>\d+)', array(
      'methods' => 'GET',
      'callback' => [$this, 'get_single_question'],
    ));

    /* Edit question */
    register_rest_route('wp-quiz-plugin', '/admin/question', array(
      'methods' => 'PUT',
      'callback' => [$this, 'edit_question'],
    ));
  }

  /* Get quiz from db and return it to html */
  public function get_quiz($data)
  {
    global $wpdb;

    if (!isset($data['id'])) {
      return rest_ensure_response("Malformed url error");
    }

    $quizId = $data['id'];

    $quiz = $wpdb->get_results("SELECT * FROM wp_quiz_plugin_quiz WHERE id = {$quizId}", "OBJECT")[0];

    return rest_ensure_response($quiz);
  }

  /* Get questions from db */
  public function get_questions($data)
  {
    global $wpdb;

    if (!isset($data['id'])) {
      return rest_ensure_response("Missing quiz id");
    }

    $quizId = $data['id'];

    $questions = $wpdb->get_results("SELECT * FROM wp_quiz_plugin_quiz_questions INNER JOIN wp_quiz_plugin_questions ON wp_quiz_plugin_questions.id = wp_quiz_plugin_quiz_questions.question_id WHERE wp_quiz_plugin_quiz_questions.quiz_id = {$quizId}", "OBJECT");

    $response = [];

    foreach ($questions as $question) {
      $options = $wpdb->get_results("SELECT * FROM wp_quiz_plugin_options WHERE question_id = {$question->id}", "OBJECT");
      array_push($response, [
        'options' => $options,
        'text' => $question->text,
        'img' => $question->img,
      ]);
    }

    return rest_ensure_response($response);
  }

  /* Store user attempt */
  public function store_attempt($data)
  {
    global $wpdb;
    global $current_user;

    if (is_user_logged_in() == false) {
      return rest_ensure_response([
        'error' => 'Bruker er ikke pålogget',
        'status' => 403
      ]);
    }

    $currentTime = time();
    $score = $data['score'];
    $quizId = $data['quizId'];
    $userId = get_current_user_id();

    if (!isset($currentTime) || !isset($score) || !isset($quizId) || !isset($userId)) {
      return rest_ensure_response("Fields are missing");
    }

    $success = $wpdb->insert(
      "wp_quiz_plugin_attempts",
      array(
        "user_id" => $userId,
        "score" => $score,
        "quiz_id" => $quizId,
        "time" => $currentTime
      ),
      array(
        "%d",
        "%d",
        "%d",
        "%d"
      )
    );

    if ($success) {
      $attempts = $wpdb->get_results("SELECT * FROM wp_quiz_plugin_attempts WHERE user_id = {$userId} AND quiz_id = {$quizId}", "OBJECT");
      $average = $wpdb->get_results("SELECT AVG(score) AS average FROM wp_quiz_plugin_attempts WHERE quiz_id = {$quizId}", "OBJECT");

      return rest_ensure_response([
        'attempts' => $attempts,
        'average' => $average[0]->average
      ]);
    }

    return rest_ensure_response([
      'error' => 'Kunne ikke lagre forsøket, noe gikk galt',
      'status' => 500
    ]);
  }

  /* List all quizzes */
  public function list_all_quizzes()
  {
    global $wpdb;

    if (is_user_logged_in() == false) {
      return rest_ensure_response([
        'error' => 'Ingen adgang',
        'status' => 403
      ]);
    }

    $quizzes = $wpdb->get_results("SELECT * FROM wp_quiz_plugin_quiz", "OBJECT");

    return rest_ensure_response($quizzes);
  }

  /* Update a quiz */
  public function update_quiz($data)
  {
    global $wpdb;

    if (is_user_logged_in() == false) {
      return rest_ensure_response([
        'error' => 'Ingen adgang',
        'status' => 403
      ]);
    }

    $success = $wpdb->update(
      'wp_quiz_plugin_quiz',
      array(
        'title' => $data['quizName'],
        'description' => $data['quizDescription']
      ),
      array('ID' => $data['id']),
      array(
        '%s',
        '%s'
      ),
      array('%d')
    );

    if ($success) {
      return rest_ensure_response([
        'message' => 'Quiz er lagret',
        'status' => 200
      ]);
    }

    return rest_ensure_response([
      'error' => 'Kunne ikke lagre quiz, noe gikk galt',
      'status' => 500
    ]);
  }

  /* Delete quiz */
  public function delete_quiz($data)
  {
    global $wpdb;

    if (is_user_logged_in() == false) {
      return rest_ensure_response([
        'error' => 'Ingen adgang',
        'status' => 403
      ]);
    }

    if (!isset($data['id'])) {
      return rest_ensure_response([
        'error' => 'Kan ikke slette quiz uten quiz id',
        'status' => 500
      ]);
    }

    $success = $wpdb->delete('wp_quiz_plugin_quiz', array('id' => $data['id']));

    if ($success) {
      return rest_ensure_response([
        'message' => 'Quiz er slettet',
        'status' => 200
      ]);
    }

    return rest_ensure_response([
      'error' => 'Kunne ikke slette quiz',
      'status' => 500
    ]);
  }

  /* Create a new quiz */
  public function create_quiz($data)
  {
    global $wpdb;

    if (is_user_logged_in() == false) {
      return rest_ensure_response([
        'error' => 'Ingen adgang',
        'status' => 403
      ]);
    }

    $quizName = $data['quizName'];
    $quizDescription = $data['quizDescription'];

    $success = $wpdb->insert(
      'wp_quiz_plugin_quiz',
      array(
        'title' => $quizName,
        'description' => $quizDescription
      ),
      array(
        '%s',
        '%s'
      )
    );

    if ($success) {
      return rest_ensure_response([
        'message' => 'Quiz er lagret',
        'status' => 200
      ]);
    }

    return rest_ensure_response([
      'error' => 'Kunne ikke lagre quiz, noe gikk galt',
      'status' => 500
    ]);
  }

  /* Get all questions */
  public function get_all_questions()
  {
    global $wpdb;

    if (is_user_logged_in() == false) {
      return rest_ensure_response([
        'error' => 'Ingen adgang',
        'status' => 403
      ]);
    }

    $questions = $wpdb->get_results('SELECT * FROM wp_quiz_plugin_questions', 'OBJECT');

    return rest_ensure_response($questions);
  }

  /* Get single question */
  public function get_single_question($data)
  {
    global $wpdb;

    if (is_user_logged_in() == false) {
      return rest_ensure_response([
        'error' => 'Ingen adgang',
        'status' => 403
      ]);
    }

    if (!isset($data['id'])) {
      return rest_ensure_response([
        'error' => 'ID is missing',
        'status' => 403
      ]);
    }

    $questionId = $data['id'];

    $question = $wpdb->get_results("SELECT * FROM wp_quiz_plugin_questions WHERE id = {$questionId}", 'OBJECT')[0];
    $options = $wpdb->get_results("SELECT * FROM wp_quiz_plugin_options WHERE question_id = {$questionId}", 'OBJECT');

    return rest_ensure_response([
      'question' => $question,
      'options' => $options
    ]);
  }

  public function edit_question($data)
  {
    global $wpdb;

    if (is_user_logged_in() == false) {
      return rest_ensure_response([
        'error' => 'Ingen adgang',
        'status' => 403
      ]);
    }

    if (!isset($data['id'])) {
      return rest_ensure_response([
        'error' => 'ID is missing',
        'status' => 500
      ]);
    }

    $wpdb->update(
      'wp_quiz_plugin_questions',
      array(
        'text' => $data['questionText'],
        'img' => $data['image']
      ),
      array('ID' => $data['id']),
      array(
        '%s',
        '%s'
      ),
      array('%d')
    );

    foreach ($data['options'] as $option) {
      $wpdb->update(
        'wp_quiz_plugin_options',
        array(
          'text' => $option['text'],
          'correct' => $option['correct']
        ),
        array('ID' => $option['id']),
        array(
          '%s',
          '%d'
        ),
        array('%d')
      );
    }

    return rest_ensure_response([
      'message' => 'Spørsmål er oppdatert',
      'status' => 200
    ]);
  }

  /* Delete a single question */
  public function delete_question($data) {
    global $wpdb;
  }

  /* Create a new question */
  public function create_question($data)
  {
    global $wpdb;

    if (is_user_logged_in() == false) {
      return rest_ensure_response([
        'error' => 'Ingen adgang',
        'status' => 403
      ]);
    }

    if (!isset($data['questionText']) || !isset($data['options']) || !isset($data['category'])) {
      return rest_ensure_response([
        'error' => 'Fields are missing',
        'status' => 500
      ]);
    }

    $success = $wpdb->insert(
      'wp_quiz_plugin_questions',
      array(
        'text' => $data['questionText'],
        'img' => $data['image']
      ),
      array(
        '%s',
        '%s'
      )
    );

    if (!$success) {
      return rest_ensure_response([
        'error' => 'Error when trying to add question',
        'status' => 500
      ]);
    }

    $questionId = int($wpdb->insert_id);

    foreach ($data['options'] as $option) {
      $wpdb->insert(
        'wp_quiz_plugin_options',
        array(
          'text' => $option['optionText'],
          'correct' => $option['correct'],
          'question_id' => $questionId
        ),
        array(
          '%s',
          '%d',
          '%d'
        )
      );
    }

    return rest_ensure_response([
      'message' => 'Question is added',
      'status' => 200
    ]);
  }
}

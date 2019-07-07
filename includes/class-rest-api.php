<?php
namespace App;

class REST_API {
    public function __construct() {
        add_action('rest_api_init', [$this, 'register_routes']);
    }

    /* Register routes with wordpress */
    public function register_routes () {
        register_rest_route( 'wp-quiz-plugin', '/quiz/(?P<id>\d+)', array(
            'methods' => 'GET',
            'callback' => [$this, 'get_quiz'],
        ));

        register_rest_route( 'wp-quiz-plugin', '/quiz/(?P<id>\d+)/getQuestions', array(
            'methods' => 'GET',
            'callback' => [$this, 'get_questions'],
        ));

        register_rest_route( 'wp-quiz-plugin', '/quiz/(?P<id>\d+)/storeAttempt', array(
            'methods' => 'POST',
            'callback' => [$this, 'store_attempt'],
        ));
    }

    /* Get quiz from db and return it to html */
    public function get_quiz ($data) {
        global $wpdb;

        if(!isset($data['id'])) {
            return rest_ensure_response("Malformed url error");
        }

        $quizId = $data['id'];

        $quiz = $wpdb->get_results("SELECT * FROM wp_quiz_plugin_quiz WHERE id = {$quizId}", "OBJECT")[0];

        return rest_ensure_response($quiz);
    }

    /* Get questions from db */
    public function get_questions ($data) {
        global $wpdb;

        if(!isset($data['id'])) {
            return rest_ensure_response("Missing quiz id");
        }

        $quizId = $data['id'];

        $questions = $wpdb->get_results("SELECT * FROM wp_quiz_plugin_quiz_questions INNER JOIN wp_quiz_plugin_questions ON wp_quiz_plugin_questions.id = wp_quiz_plugin_quiz_questions.question_id WHERE wp_quiz_plugin_quiz_questions.quiz_id = {$quizId}", "OBJECT");

        $response = [];

        foreach($questions as $question) {
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
    public function store_attempt ($data) {
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

        if(!isset($currentTime) || !isset($score) || !isset($quizId) || !isset($userId)) {
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
}
<?php
namespace App;

class Frontend {
    public function __construct() {
        add_shortcode( 'wp-quiz-plugin', [ $this, 'render_frontend' ] );
        add_action('wp_head', [$this, 'add_plugin_url_global']);
        add_action('wp_head', [$this, 'add_nonce']);
    }

    public function add_plugin_url_global () {
        echo '<script type="text/javascript">var ajaxurl = "' . get_rest_url(null, 'wp-quiz-plugin') . '";</script>';
    }

    public function add_nonce () {
        echo '<script type="text/javascript">var wpQuizNonce = "' . wp_create_nonce( 'wp_rest' ) . '";</script>';
    }

    public function render_frontend( $atts, $content = '' ) {
        wp_enqueue_style('baseplugin-frontend');
        wp_enqueue_script('baseplugin-frontend');

        echo '<script type="text/javascript">var quizId = ' . $atts[0] . '</script>';

        $content .= '<div quizId="' . $atts[0] . ' " id="vue-frontend-app"></div>';

        return $content;
    }
}

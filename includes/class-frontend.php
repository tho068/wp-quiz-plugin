<?php
namespace App;

class Frontend {
    public function __construct() {
        add_shortcode( 'wp-quiz-plugin', [ $this, 'render_frontend' ] );
    }

    public function render_frontend( $atts, $content = '' ) {
        wp_enqueue_style('baseplugin-frontend');
        wp_enqueue_script('baseplugin-frontend');

        echo '<script type="text/javascript">var quizId = ' . $atts[0] . '</script>';

        $content .= '<div quizId="' . $atts[0] . ' " id="vue-frontend-app"></div>';

        return $content;
    }
}

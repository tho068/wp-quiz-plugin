<?php
namespace App;

/**
 * Admin Pages Handler
 */
class Admin {

    public function __construct() {
        add_action('wp_head', [$this, 'add_nonce']);
        add_action( 'admin_menu', [ $this, 'admin_menu' ] );
        wp_enqueue_media();
    }

    /**
     * Register our menu page
     *
     * @return void
     */
    public function admin_menu() {
        global $submenu;

        $capability = 'manage_options';
        $slug       = 'wp-quiz-plugin';

        $hook = add_menu_page( __( 'WP-Quiz-Plugin', 'textdomain' ), __( 'WP-Quiz-Plugin', 'textdomain' ), $capability, $slug, [ $this, 'plugin_page' ], 'dashicons-text' );

        if ( current_user_can( $capability ) ) {
            $submenu[ $slug ][] = array( __( 'Quiz', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/quiz' );
            $submenu[ $slug ][] = array( __( 'Questions', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/questions' );
            $submenu[ $slug ][] = array( __( 'Categories', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/categories' );
        }

        add_action( 'load-' . $hook, [ $this, 'init_hooks'] );
    }

    /**
     * Initialize our hooks for the admin page
     *
     * @return void
     */
    public function init_hooks() {
        add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
    }

    /**
     * Load scripts and styles for the app
     *
     * @return void
     */
    public function enqueue_scripts() {
        wp_enqueue_style( 'baseplugin-admin' );
        wp_enqueue_script( 'baseplugin-admin' );
    }

    /**
     * Render our admin page
     *
     * @return void
     */
    public function plugin_page() {
        echo '<div class="wrap"><div id="vue-admin-app"></div></div>';
    }
}

<?php
/*
Plugin Name: WP-Quiz-Plugin
Plugin URI: https://fason.no
Description: Quiz plugin made for Jegerpro
Version: 0.1
Author: Thomas Holden
Author URI: https://tholden.no
License: GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: baseplugin
Domain Path: /languages
*/

// don't call the file directly
if ( !defined( 'ABSPATH' ) ) exit;

/**
 * Base_Plugin class
 *
 * @class Base_Plugin The class that holds the entire Base_Plugin plugin
 */
final class Base_Plugin {

    /**
     * Plugin version
     *
     * @var string
     */
    public $version = '0.1.0';

    /**
     * Holds various class instances
     *
     * @var array
     */
    private $container = array();

    /**
     * Constructor for the Base_Plugin class
     *
     * Sets up all the appropriate hooks and actions
     * within our plugin.
     */
    public function __construct() {

        $this->define_constants();

        register_activation_hook( __FILE__, array( $this, 'activate' ) );
        register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );

        add_action( 'plugins_loaded', array( $this, 'init_plugin' ) );
    }

    /**
     * Initializes the Base_Plugin() class
     *
     * Checks for an existing Base_Plugin() instance
     * and if it doesn't find one, creates it.
     */
    public static function init() {
        static $instance = false;

        if ( ! $instance ) {
            $instance = new Base_Plugin();
        }

        return $instance;
    }

    /**
     * Magic getter to bypass referencing plugin.
     *
     * @param $prop
     *
     * @return mixed
     */
    public function __get( $prop ) {
        if ( array_key_exists( $prop, $this->container ) ) {
            return $this->container[ $prop ];
        }

        return $this->{$prop};
    }

    /**
     * Magic isset to bypass referencing plugin.
     *
     * @param $prop
     *
     * @return mixed
     */
    public function __isset( $prop ) {
        return isset( $this->{$prop} ) || isset( $this->container[ $prop ] );
    }

    /**
     * Define the constants
     *
     * @return void
     */
    public function define_constants() {
        define( 'BASEPLUGIN_VERSION', $this->version );
        define( 'BASEPLUGIN_FILE', __FILE__ );
        define( 'BASEPLUGIN_PATH', dirname( BASEPLUGIN_FILE ) );
        define( 'BASEPLUGIN_INCLUDES', BASEPLUGIN_PATH . '/includes' );
        define( 'BASEPLUGIN_URL', plugins_url( '', BASEPLUGIN_FILE ) );
        define( 'BASEPLUGIN_ASSETS', BASEPLUGIN_URL . '/assets' );
    }

    /**
     * Load the plugin after all plugis are loaded
     *
     * @return void
     */
    public function init_plugin() {
        $this->includes();
        $this->init_hooks();
    }

    /**
     * Placeholder for activation function
     *
     * Nothing being called here yet.
     */
    public function activate() {

        $installed = get_option( 'baseplugin_installed' );

        if ( ! $installed ) {
            update_option( 'baseplugin_installed', time() );
        }

        update_option( 'baseplugin_version', BASEPLUGIN_VERSION );

        $this->create_db_tables();
    }

    public function create_db_tables() {
        global $wpdb;

        require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

        $charset_collate = $wpdb->get_charset_collate();

        /* Attempts */
        $attemptTable = "CREATE TABLE IF NOT EXISTS wp_quiz_plugin_attempts (
            id int(11) NOT NULL AUTO_INCREMENT,
            quiz_id int(11) NOT NULL,
            user_id int(11) NOT NULL,
            score int(11) NOT NULL,
            time int(11) NOT NULL,
            PRIMARY KEY (id)
        ) $charset_collate;";

        /* Categories */
        $categoryTable = "CREATE TABLE IF NOT EXISTS wp_quiz_plugin_category (
            id int(11) NOT NULL AUTO_INCREMENT,
            name varchar(55) NOT NULL,
            PRIMARY KEY (id)
        ) $charset_collate;";

        /* Options */
        $optionsTable = "CREATE TABLE IF NOT EXISTS wp_quiz_plugin_options (
            id int(11) NOT NULL AUTO_INCREMENT,
            text text NOT NULL,
            correct tinyint(1) NOT NULL,
            question_id int(11) NOT NULL,
            PRIMARY KEY (id)
        ) $charset_collate;";

        /* Questions */
        $questionsTable = "CREATE TABLE IF NOT EXISTS wp_quiz_plugin_questions (
            id int(11) NOT NULL AUTO_INCREMENT,
            text text NOT NULL,
            img varchar(500) NOT NULL,
            PRIMARY KEY (id)
        ) $charset_collate;";

        /* Quiz */
        $quizTable = "CREATE TABLE IF NOT EXISTS wp_quiz_plugin_quiz (
            id int(11) NOT NULL AUTO_INCREMENT,
            title varchar(55) NOT NULL,
            description text NOT NULL,
            num_questions int(11) NOT NULL,
            PRIMARY KEY (id)
        ) $charset_collate;";

        /* Quiz Questions */
        $quizQuestionsTable = "CREATE TABLE IF NOT EXISTS wp_quiz_plugin_quiz_questions (
            id int(11) NOT NULL AUTO_INCREMENT,
            question_id int(11) NOT NULL,
            quiz_id int(11) NOT NULL,
            PRIMARY KEY (id)
        ) $charset_collate;";
        
        dbDelta($attemptTable);
        dbDelta($categoryTable);
        dbDelta($optionsTable);
        dbDelta($questionsTable);
        dbDelta($quizTable);
        dbDelta($quizQuestionsTable);
    }

    /**
     * Placeholder for deactivation function
     *
     * Nothing being called here yet.
     */
    public function deactivate() {

    }

    /**
     * Include the required files
     *
     * @return void
     */
    public function includes() {

        require_once BASEPLUGIN_INCLUDES . '/class-rest-api.php';
        require_once BASEPLUGIN_INCLUDES . '/class-assets.php';

        if ( $this->is_request( 'admin' ) ) {
            require_once BASEPLUGIN_INCLUDES . '/class-admin.php';
        }

        if ( $this->is_request( 'frontend' ) ) {
            require_once BASEPLUGIN_INCLUDES . '/class-frontend.php';
        }
    }

    /**
     * Initialize the hooks
     *
     * @return void
     */
    public function init_hooks() {
        add_action( 'init', array( $this, 'init_classes' ) );

        add_action( 'init', array( $this, 'localization_setup' ) );

        /* Add required nonce to frontend head */
        add_action('wp_head', [$this, 'add_plugin_url_global']);
        add_action('wp_head', [$this, 'add_nonce']);

        /* Add required nonce to backend head */
        add_action('admin_head', [$this, 'add_plugin_url_global']);
        add_action('admin_head', [$this, 'add_nonce']);
    }

    public function add_plugin_url_global () {
        echo '<script type="text/javascript">var ajaxurl = "' . get_rest_url(null, 'wp-quiz-plugin') . '";</script>';
    }

    public function add_nonce () {
        echo '<script type="text/javascript">var wpQuizNonce = "' . wp_create_nonce( 'wp_rest' ) . '";</script>';
    }

    /**
     * Instantiate the required classes
     *
     * @return void
     */
    public function init_classes() {
        if ( $this->is_request( 'admin' ) ) {
            $this->container['admin'] = new App\Admin();
        }

        if ( $this->is_request( 'frontend' ) ) {
            $this->container['frontend'] = new App\Frontend();
        }

        $this->container['assets'] = new App\Assets();
        $this->container['rest'] = new App\REST_API();
    }

    /**
     * Initialize plugin for localization
     *
     * @uses load_plugin_textdomain()
     */
    public function localization_setup() {
        load_plugin_textdomain( 'baseplugin', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
    }

    /**
     * What type of request is this?
     *
     * @param  string $type admin, ajax, cron or frontend.
     *
     * @return bool
     */
    private function is_request( $type ) {
        switch ( $type ) {
            case 'admin' :
                return is_admin();

            case 'ajax' :
                return defined( 'DOING_AJAX' );

            case 'rest' :
                return defined( 'REST_REQUEST' );

            case 'cron' :
                return defined( 'DOING_CRON' );

            case 'frontend' :
                return ( ! is_admin() || defined( 'DOING_AJAX' ) ) && ! defined( 'DOING_CRON' );
        }
    }

} // Base_Plugin

$baseplugin = Base_Plugin::init();

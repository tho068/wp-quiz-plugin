import Vue from 'vue'
import App from './App.vue'
import router from './router'
import menuFix from './utils/admin-menu-fix'
import CKEditor from '@ckeditor/ckeditor5-vue';
import Notifications from 'vue-notification'

Vue.use(CKEditor)
Vue.use(Notifications)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#vue-admin-app',
    router,
    render: h => h(App)
});


// fix the admin menu for the slug "vue-app"
menuFix('vue-app');

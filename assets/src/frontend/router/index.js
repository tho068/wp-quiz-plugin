import Vue from 'vue'
import Router from 'vue-router'
import Quiz from 'frontend/components/Quiz.vue'
import Questions from 'frontend/components/Questions.vue'
import Completed from 'frontend/components/Completed.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Quiz',
            component: Quiz
        },
        {
            path: '/questions',
            name: 'Questions',
            component: Questions
        },
        {
            path: '/completed',
            name: 'Completed',
            component: Completed,
            props: true
        }
    ]
})

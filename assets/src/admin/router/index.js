import Vue from 'vue'
import Router from 'vue-router'
import Quiz from 'admin/components/Quiz.vue'
import Questions from 'admin/components/Questions.vue'
import CreateQuiz from 'admin/components/CreateQuiz.vue'
import EditQuiz from 'admin/components/EditQuiz.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/quiz',
            name: 'QuizOverview',
            component: Quiz
        },
        {
            path: '/quiz/create',
            name: 'CreateQuiz',
            component: CreateQuiz
        },
        {
            path: '/quiz/edit',
            name: 'EditQuiz',
            component: EditQuiz,
            props: true
        },
        {
            path: '/questions',
            name: 'Settings',
            component: Questions
        },
    ]
})

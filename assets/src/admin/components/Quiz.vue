<template lang="pug">
  #quiz
    table.wp-list-table.widefat.fixed.striped.pages(v-if="quizzes != null")
      thead
        tr
          th.manage-column Quiz name
          th.manage-column Quiz description
          th.manage-column Actions
      tbody
        tr(
          v-for="(quiz, idx) in quizzes"
        )
          td {{ quiz.title }}
          td {{ quiz.description }}
          td
            div.button-group
              button.button-primary(@click="edit(quiz)") Edit
              button.button-primary(@click="deleteQuiz(quiz)") Delete
    div.tablenav.bottom
      button(@click="create").button-primary + Quiz
</template>

<script>
import Axios from "@/api";

export default {
  name: "QuizOverview",
  data() {
    return {
      quizzes: null
    };
  },
  mounted () {
    this.loadQuizzes()
  },
  methods: {
    async loadQuizzes() {
      try {
        let quizzes = await Axios.get('/admin/quiz')
        this.quizzes = quizzes.data
      } catch (e) {
        console.log(e)
      }
    },
    create () {
      this.$router.push({
        name: 'CreateQuiz'
      })
    },
    async deleteQuiz (quiz) {
      try {
        await Axios.post('/admin/quiz/delete', {
          id: quiz.id
        })
        this.loadQuizzes()
      } catch (e) {
        console.log(e)
      }
    },
    edit (quiz) {
      this.$router.push({
        name: 'EditQuiz',
        params: {quiz}
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    margin-top: 25px;
  }
  .tablenav {
    margin-top: 25px;
  }
  .button-group button {
    margin-right: 5px;
  }
</style>

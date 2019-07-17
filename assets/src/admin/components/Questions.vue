<template lang="pug">
  #questions
    h2 Question bank
    table.wp-list-table.widefat.fixed.striped.pages
      thead
        tr
          th.manage-column Question
          th.manage-column Category
          th.manage-column Actions
      tbody
        tr(
          v-for="(question, idx) in questions"
        )
          td(
            v-html="question.text"
          ) 
          td {{ question.category }}
          td
            div.button-group
              button.button-primary(@click="edit(question)") Edit
              button.button-primary(@click="deleteQuestion(question)") Delete
    div.tablenav.bottom
      button(@click="create").button-primary + Question
</template>

<script>
import Axios from "@/api";

export default {
  name: "Questions",
  data() {
    return {
      questions: []
    };
  },
  mounted () {
    this.get()
  },
  methods: {
    async get () {
      try {
        const questions = await Axios.get('/admin/question')
        this.questions = questions.data
      } catch (e) {
        console.log(e)
      }
    },
    edit (question) {
      this.$router.push({
        name: 'EditQuestion',
        params: {question}
      })
    },
    deleteQuestion (question) {

    },
    create () {
      this.$router.push({
        name: 'CreateQuestion'
      })
    }
  }
};
</script>

<style lang="css" scoped>
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
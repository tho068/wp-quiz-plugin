<template lang="pug">
  #quiz
    table.form-table
      tbody
        tr.form-field
          th(scope="row")
            label Quiz Name
          td
            input(v-model="quizName")
        tr.form-field
          th
            label Quiz Description
          td
            input(v-model="quizDescription")
    p.submit
      button.button-primary(@click="update()") Save
</template>

<script>
import Axios from "@/api";

export default {
  name: "EditQuiz",
  props: ["quiz"],
  data() {
    return {
      id: "",
      quizName: "",
      quizDescription: ""
    };
  },
  mounted () {
    if (typeof this.quiz === "undefined") {
      this.$router.push({
        name: 'QuizOverview'
      })
      return
    }

    this.id = this.quiz.id;
    this.quizName = this.quiz.title;
    this.quizDescription = this.quiz.description;
  },
  methods: {
    async update () {
      try {
        if (this.quizName.length <= 0 || this.quizDescription <= 0) {
          return;
        }
        const res = await Axios.put("/admin/quiz", {
          id: this.id,
          quizName: this.quizName,
          quizDescription: this.quizDescription
        });
        this.$router.push({
          name: "QuizOverview"
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style>
</style>

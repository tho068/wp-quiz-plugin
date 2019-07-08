<template lang="pug">
  #home(v-if="quiz != null")
    h3 {{ quiz.title }}
    p {{ quiz.description }}
    button.quiz-button(@click="startQuiz()") Start
</template>

<script>
import Axios from "@/api.js";

export default {
  name: "Quiz",
  data() {
    return {
      currentQuiz: null
    };
  },
  async mounted() {
    this.loadQuiz();
  },
  methods: {
    async loadQuiz() {
      try {
        let quiz = await Axios.get(`/quiz/${quizId}`);
        this.currentQuiz = quiz.data;
      } catch (e) {
        console.log(e);
      }
    },
    startQuiz() {
      this.$router.push({
        name: "Questions"
      });
    }
  },
  computed: {
    quiz() {
      return this.currentQuiz;
    }
  }
};
</script>

<style scoped>
</style>

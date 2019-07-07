<template lang="pug">
  #completed(v-if="score")
    h4 Ditt resultat
    p Du har svart korrekt på {{ numCorrect }} av totalt {{ totalQuestions }} spørsmål
    .chart-wrapper
      .chart-container
        h4 Din score VS gjenomsnittet
        canvas(ref="chart-average")#average-chart

      .chart-container
        h4 Din fremgang
        canvas(ref="chart-progress")#average-chart

    button.restart-button(@click="restart()") Start på nytt
</template>

<script>
import Chart from "chart.js";
import Axios from "@/api.js";
import { Promise } from "q";

export default {
  name: "Completed",
  props: ["score"],
  data() {
    return {
      attempts: [],
      average: 0
    };
  },
  async mounted() {
    if (typeof this.score == "undefined") {
      this.$router.push({ name: "Quiz" });
      return;
    }
    await this.storeAttempt();
    this.initProgressChart();
    this.initAverageChart();
  },
  methods: {
    restart() {
      this.$router.push({ name: "Quiz" });
    },
    storeAttempt() {
      return new Promise(async (Resolve, Reject) => {
        try {
          const earlierAttempts = await Axios.post(
            `/quiz/${quizId}/storeAttempt`,
            {
              score: this.numCorrect,
              quizId
            }
          );

          this.attempts = earlierAttempts.data.attempts;
          this.average = earlierAttempts.data.average;

          Resolve();
        } catch (e) {
          Reject(e);
        }
      });
    },
    initProgressChart() {
      const ctx = this.$refs["chart-progress"];
      const chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: this.attemptLabels,
          datasets: [
            {
              data: this.attemptScore,
              label: "Din fremgang",
              fill: false,
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)"
              ]
            }
          ]
        }
      });
    },
    initAverageChart() {
      const ctx = this.$refs["chart-average"];
      const chart = new Chart(ctx, {
        type: "horizontalBar",
        data: {
          labels: ["Din score", "Gjennomsnittelig score"],
          datasets: [
            {
              label: "Din score VS gjenomsnittet",
              data: [this.numCorrect, this.numAverage],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            xAxes: [
              {
                barPercentage: 0.5,
                barThickness: 6,
                ticks: {
                  beginAtZero: true
                },
                maxBarThickness: 8,
                minBarLength: 2,
                gridLines: {
                  offsetGridLines: true
                }
              }
            ]
          }
        }
      });
    }
  },
  computed: {
    /* Return number of correct answers */
    numCorrect() {
      let num = 0;
      for (let i = 0; i < this.score.length; i++) {
        if (this.score[i].option.correct == "1") {
          num++;
        }
      }
      return num;
    },
    /* Return total amount of questions */
    totalQuestions() {
      return this.score.length;
    },
    /* Return average score */
    numAverage() {
      return this.average;
    },
    attemptLabels() {
      let labels = [];
      for (let i = 0; i < this.attempts.length; i++) {
        labels.push(i + 1);
      }
      return labels;
    },
    attemptScore() {
      let score = [];
      for (let i = 0; i < this.attempts.length; i++) {
        score.push(this.attempts[i].score);
      }
      return score;
    }
  }
};
</script>

<style>
#completed {
  text-align: center;
  margin-bottom: 25px;
}
.chart-wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 25px;
  margin-bottom: 25px;
}
.chart-container {
  background: #f8f8f8;
  padding: 25px;
  width: calc(50% - 5px);
}
.chart-container h4 {
  padding-top: 0;
  padding-bottom: 25px;
  margin-bottom: 0;
  margin-top: 0;
}
#average-chart {
  margin: 0 auto;
}
.restart-button {
  margin-top: 25px;
}
</style>

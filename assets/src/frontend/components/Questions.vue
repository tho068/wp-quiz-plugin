<template lang="pug">
    #questions-container
        .question(v-if="currentQuestion")
            h3.question-text {{ currentQuestion.text }}
            p.question-index Spørsmål {{ currentQuestionNumber }} av {{ numberOfQuestions }}
            .opt-and-image-container
                .options-container
                    button.option(
                        v-for="(opt, index) in currentQuestion.options"
                        :key="index"
                        block
                        @click="optionClicked(opt)"
                        ref="option"
                        :id="opt.id"
                    ) {{ opt.text }}
                .image-container(v-if="currentQuestion.img.length > 0")
                    img(:src="currentQuestion.img")
            button.quiz-button(
                v-if="!completed"
                @click="next()"
            ) Neste
            button.quiz-button(
                v-if="completed"
                @click="finish()"
            ) Fullfør
</template>

<script>

import Axios from '@/api.js'

export default {
    name: 'Questions',
    data () {
        return {
            questions: [],
            questionIndex: 0,
            lock: false,
            completed: false,
            score: [],
        };
    },
    mounted () {
        this.idx = 0
        this.loadQuestion()
    },
    methods: {
        async loadQuestion () {
            try {
                let questions = await Axios.get(`/quiz/${quizId}/getQuestions`)
                this.questions = questions.data
            } catch (e) {
                console.log(e)
            }
        },
        async optionClicked (opt) {
            try {
                if (this.lock) {
                    return
                }
                if (this.questions.length - 1 == this.questionIndex) {
                    this.completed = true
                }
                for (let i = 0; i < this.$refs.option.length; i++) {
                    if (this.$refs.option[i].id == opt.id) {
                        if (opt.correct == "1") {
                            this.$refs.option[i].classList.add('correct')
                        }
                        else {
                            this.$refs.option[i].classList.add('wrong')
                        }
                    }
                }
                this.score.push({
                    question: this.currentQuestion,
                    option: opt
                })
                this.lock = true
            } catch (e) {
                console.log(e)
            }
        },
        resetOptions () {
            for (let i = 0; i < this.$refs.option.length; i++) {
                this.$refs.option[i].classList.remove('correct')
                this.$refs.option[i].classList.remove('wrong')   
            }
        },
        next () {
            if (!this.lock) {
                return
            }
            this.questionIndex = this.questionIndex + 1
            this.resetOptions()
            this.lock = false
        },
        finish () {
            this.$router.push({
                name: 'Completed',
                params: { score: this.score }
            })
        }
    },
    computed: {
        currentQuestion () {
            return this.questions[this.questionIndex]
        },
        numberOfQuestions () {
            return this.questions.length
        },
        currentQuestionNumber () {
            return this.questionIndex + 1
        }
    },
};
</script>

<style>
.question-text {
    text-align: center;
}
.question-index {
    text-align: center;
    margin-bottom: 30px !important;
    margin-top: 10px;
}
.opt-and-image-container {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}
.options-container {
    flex-grow: 1;
    width: 50%;
}
.image-container {
    flex-grow: 1;
    width: 50%;
    padding-left: 25px;
}
.image-container img {
    height: 350px;
    text-align: center;
    max-height: 350px;
}
.option {
    display: block;
    width: 100%;
    margin-bottom: 10px;
}
.correct {
    background: green !important;
}
.wrong {
    background: red !important;
}
</style>
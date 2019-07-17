<template lang="pug">
  #quiz
    table.form-table(v-if="ready")
      tbody
        tr.form-field
          th
            label Question text
          td
            ckeditor.editor(
              id="QuestionText"
              :editor="editor" 
              v-model="questionText" 
            )
        tr.form-field
          th
            label Image
          td
            span
              input(v-model="url").url-field
              button.button-primary(@click="addUploaderFunctionToButton") Add Image
        tr.form-field
          th
            label Category
          td
            select
              option(
                v-for="(cat, idx) in categories"
                v-bind:value="cat.id"
                v-model="category"
              ) {{ cat.name }}

    table.wp-list-table.widefat
      thead
        td.manage-column
          | Correct
        td.manage-column
          | Option text
      tbody
        tr.form-field(
          v-for="option in options"
        )
          th#cb.manage-column.column-cb.check-column
            input(
              type="checkbox"
              v-model="option.correct"  
            )
          td.manage-column
            input(
              type="text"
              v-model="option.text" 
            )

    p.submit
      button.button-primary(@click="addOption()") Add Option
      button.button-primary(@click="save()") Save
</template>

<script>
import Axios from "@/api";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: "EditQuestion",
  props: ['question'],
  data() {
    return {
      ready: false,
      id: null,
      questionText: "",
      editor: ClassicEditor,
      categories: [
        {
          name: 'Uncategorized',
          id: 0
        }
      ],
      options: [],
      category: "",
      url: ""
    };
  },
  mounted () {
    if (typeof this.question === 'undefined') {
      this.$router.push({
        name: 'QuestionOverview'
      })
      return
    }
    this.get()
  },
  methods: {
    /* Get complete question to edit from db */
    async get () {
      try {
        const question = await Axios.get(`/admin/question/${this.question.id}`)
        this.questionText = question.data.question.text
        this.url = question.data.question.img
        this.id = question.data.question.id
        let options = question.data.options
        for (let i = 0; i < options.length; i++) {
          if (options[i].correct === "1") {
            options[i].correct = true
          } else {
            options[i].correct = false
          }
        }
        this.options = options
        this.ready = true
      } catch (e) {
        this.$notify({
          title: 'Error',
          text: e,
          type: 'error'
        });
      }
    },
    /* Save question to db */
    async save() {
      try {
        this.validate()

        const payload = {
          id: this.id,
          questionText: this.questionText,
          options: this.options,
          category: this.category,
          image: this.url
        }

        const res = await Axios.put('/admin/question', payload)

        this.$router.push({
          name: 'QuestionOverview'
        })

      } catch (e) {
        this.$notify({
          title: 'Error',
          text: e,
          type: 'error'
        });
      }
    },
    /* Validate correctness of question */
    validate () {
      if (this.questionText.length <= 0) {
        throw('Question text field cannot be empty')
        return
      }
      if (this.options.length <= 0) {
        throw('Define atleast one option')
      }
      let numCorrect = 0
      for (let i = 0; i < this.options.length; i++) {
        let opt = this.options[i]
        if (opt.correct === true) {
          numCorrect++
        }
      }
      if (numCorrect == 0) {
        throw('Select one option as correct')
      }
      if (numCorrect > 1) {
        throw('Select ONLY one option as correct')
      }
    },
    /* Add new option */
    addOption () {
      this.options.push({
        text: "",
        correct: false,
      })
    },
    /* Show wordpress media box */
    addUploaderFunctionToButton () {
      var media_frame = wp.media({
        title: 'Select or Upload A File',   
        button: { text: 'Use This' },       
        multiple: false
      });
      media_frame.on( 'select', () => {
        var attachment = media_frame.state().get('selection').first().toJSON();
        this.url = attachment.url
      });
      media_frame.open();
    }
  },
};
</script>

<style scoped>
  .url-field {
    width: 90%;
  }
</style>

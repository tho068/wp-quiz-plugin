<template lang="pug">
  #quiz
    table.form-table
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
            input(v-model="url")
          td
            button.primary-button(@click="addUploaderFunctionToButton") Add Image
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
        td#cb.manage-column.column-cb.check-column
          | Correct
        td.manage-column
          | Option text
      tbody
        tr.form-field(v-for="idx in numOptions")
          th#cb.manage-column.column-cb.check-column
            input(
              type="checkbox"
              v-model="correct[idx]"  
            )
          td.manage-column
            input(
              type="text"
              v-model="options[idx]" 
            )

    p.submit
      button.button-primary(@click="addOption()") Add Option
      button.button-primary(@click="save()") Save
</template>

<script>
import Axios from "@/api";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: "CreateQuestion",
  data() {
    return {
      questionText: "",
      editor: ClassicEditor,
      numOptions: 3,
      categories: [
        {
          name: 'Uncategorized',
          id: 0
        }
      ],
      options: [],
      correct: [],
      category: "",
      url: ""
    };
  },
  methods: {
    async save() {
      try {
        /* Validate the question */
        this.validate()

        /* Build options */
        let options = this.buildOptions()

        /* Create payload */
        const payload = {
          questionText: this.questionText,
          options: options,
          category: this.category,
          image: this.url
        }

        console.log(payload)

        const res = await Axios.post('/admin/question', payload)
      } catch (e) {
        this.$notify({
          group: 'warning',
          title: 'Error',
          text: e
        });
      }
    },
    validate () {
      if (this.questionText.length <= 0) {
        throw('No question text inputted')
        return
      }

      if (this.options.length <= 0) {
        throw('Options are empty')
      }
    },
    buildOptions () {
      let res = []
      for (let i = 0; i < this.options.length; i++) {
        let opt = this.options[i]
        let correct = this.correct[i]
        if (typeof opt === 'undefined') {
          continue
        }
        if (typeof correct !== 'undefined') {
          if (correct === true) {
            res.push({
              optionText: opt,
              correct: true
            })
          }
        } else {
            res.push({
              optionText: opt,
              correct: false
            })
        }
      }
      return res
    },
    addOption () {
      this.numOptions++
    },
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
  watch: {
    url: function (val) {
      console.log(this.url)
    }
  }
};
</script>

<style scoped>
  .checkbox {
    width: 10px !important;
  }
</style>

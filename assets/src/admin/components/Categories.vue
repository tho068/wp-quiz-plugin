<template lang="pug">
  #categories
    h2 Categories
    table.wp-list-table.widefat.fixed.striped.pages
      thead
        tr
          th.manage-column Category name
          th.manage-column Actions
      tbody
        tr(
          v-for="(cat, idx) in categories"
        )
          td {{ cat.name }}
          td
            div.button-group
              button.button-primary(@click="edit(cat)") Edit
              button.button-primary(@click="deleteCategory(cat)") Delete
    div.tablenav.bottom
      button(@click="create").button-primary + Category
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      categories: []
    };
  },
  methods: {
    edit (cat) {

    },
    deleteCategory (cat) {

    },
    create () {

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
<template>
  <section>
    <div class="title-container">
      <h3 class="title">{{section.title}}</h3>
    </div>
    <div v-if="section.items.length">
      <table class="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>שם המנה</th>
            <th>תיאור</th>
            <th>מחיר</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in sectionItems" :key="item.id">
            <td>
              <input type="text" v-model="item.title" placeholder="enter item name" @input="editItem(item)">
            </td>
            <td>
              <textarea type="text" v-model="item.description" placeholder="enter description" @input="editItem(item)"></textarea>
            </td>
            <td>
              <input type="text" v-model="item.price" placeholder="enter price" @input="editItem(item)">
            </td>
            <a class="delete is-medium" @click="deleteItem(item.id)"></a>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="addItem()">add item</button>
    <button @click="deleteSection()">delete category</button>
  </section>
</template>

<script>
import menuService from "../services/menu.service.js";

export default {
  props: ["section"],
  data() {
    return {
      sectionItems: JSON.parse(JSON.stringify(this.section.items))
    };
  },
  methods: {
    deleteItem(itemId) {
      this.$store.dispatch({ type: "deleteItem", itemId });
    },
    addItem() {
      this.$store.dispatch({ type: "addItem", sectionId: this.section.id });
    },
    deleteSection() {
      this.$store.dispatch({
        type: "deleteSection",
        sectionId: this.section.id
      });
    },
    editItem(item) {
      this.$store.dispatch({type: 'editItem', item})
    },
  },

  watch: {
    section() {
      this.sectionItems = JSON.parse(JSON.stringify(this.section.items));
    }
  },
  created() {
    // console.log(this.section)
  }
};
</script>

<style lang="scss" scoped>
table td,
table th {
  text-align: right;
}
.title {
  text-align: center;
  margin-top: 15px;
  margin-bottom: 7px;
}
input,
textarea {
  border: none;
  outline: none;
  background: none;
}
textarea {
  width: -webkit-fill-available;
}
.title-container {
  display: flex;
  justify-content: center;
}
button {
  margin: 10px;
}
</style>


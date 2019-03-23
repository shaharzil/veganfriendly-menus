<template>
  <section class="column card" v-if="rest && itemsForDisplay">
    <header class="panel-heading"><span>שם המסעדה: {{rest.name}}</span> <button v-if="isEditMode " @click="saveCanges()">עדכן</button></header>
    <div v-if="!isEditMode">
      <menu-section
        v-for="section in itemsForDisplay"
        :key="section.id"
        :section="section"
      ></menu-section>
    </div>
    <div v-else>
      <edit-section
        v-for="section in itemsForDisplay"
        :key="section.id"
        :section="section"
      ></edit-section>
      <button @click="addSection()" class="add-category"><span>+</span></button>
    </div>
    <div></div>
  </section>
</template>

<script>
import menuService from "../services/menu.service.js";
import menuSection from "./MenuSection.component.vue";
import editSection from "./EditSection.component.vue";

export default {
  created() {
    this.setMenu();
  },
  computed: {
    restId() {
      return +this.$route.params.id;
    },
    isEditMode() {
      return !!this.$route.params.edit;
    },
    rest() {
      return this.$store.getters.rest
    },
    itemsForDisplay() {
      return JSON.parse(JSON.stringify(this.$store.getters.itemsForDisplay))
    }
  },
  methods: {
    setMenu() {
      this.$store.dispatch({type: 'setRest', restId: this.restId})
    },
    addSection() {
      this.$store.dispatch({type: 'addSection'})
    },
    saveCanges() {
      this.$store.dispatch({type: 'saveCanges', restId: this.restId})
    }    
  },
  watch: {
    restId() {
      this.setMenu();
    }
  },
  components: {
    menuSection,
    editSection
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding-right: 0;
  min-height: 100vh;
  .add-category {
    padding: 0;
    width: 50px;
    font-size: 30px;
    height: 50px;
    background-color: lightgray;
    border-radius: 50%;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: all .3s;
    margin-top: 20px;
    &:hover {
        background-color: rgb(165, 163, 163);
    }
  }
  header {
    display: flex;
    justify-content: space-between;
  }
  
}
</style>

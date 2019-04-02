<template>
  <section class="column card" v-if="rest && itemsForDisplay">
    <header class="panel-heading">
      <span>שם המסעדה: {{rest.name}}</span>
      <button v-if="isEditMode " @click="saveCanges()">עדכן</button>
    </header>
    <div v-if="!isEditMode">
      <menu-section v-for="section in itemsForDisplay" :key="section.id" :section="section"></menu-section>
    </div>
    <div v-else>
      <edit-section v-for="section in itemsForDisplay" :key="section.id" :section="section"></edit-section>
      <div class="modal" ref="modal">
        <div class="modal-background" @click="closeModal()"></div>
        <div class="modal-content">
          <div class="box">
            <h2 class="title">בחר קטגוריה</h2>
            <p>* שימו לב, אין להשאיר קטגוריה ללא שם. אם אינכם יודעים לאיזו קטגוריה שייכת המנה, רשמו אותה תחת "מנות טבעוניות"</p>
            <br>
            <div class="flex center">

            <input class="button is-large" v-model="newSectionName" list="titles" placeholder="הכנס שם קטגוריה">
            <datalist class="dropdown-content" id="titles">
              <option class="dropdown-item" v-for="section in sections" :key="section.id" :value="section.title"></option>
            </datalist>
            </div>
            <br>
            <button class="button is-link add-section" @click="addSection()">הוסף קטגוריה</button>
            <button @click="closeModal()" class="modal-close is-large" aria-label="close"></button>
          </div>
        </div>
      </div>
      <button @click="openModal()" class="add-category">
        <span>+</span>
      </button>
    </div>
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
  data() {
    return {
      newSectionName: ""
    };
  },
  computed: {
    restId() {
      return this.$route.params.id;
    },
    isEditMode() {
      return !!this.$route.params.edit;
    },
    rest() {
      return this.$store.getters.rest;
    },
    itemsForDisplay() {
      return JSON.parse(JSON.stringify(this.$store.getters.itemsForDisplay));
    },
    sections() {
      return this.$store.getters.sections;
    }
  },
  methods: {
    setMenu() {
      this.$store.dispatch({ type: "setRest", restId: this.restId });
    },
    addSection() {
      if (!this.newSectionName) return;
      this.$store.dispatch({ type: "addSection", title: this.newSectionName });
      this.title = ''
      this.closeModal();
    },
    saveCanges() {
      this.$store.dispatch({ type: "saveCanges" });
    },
    openModal() {
      this.$refs.modal.classList.add("is-active");
    },
    closeModal() {
      this.$refs.modal.classList.remove("is-active");
    }
  },
  watch: {
    restId() {
      if (this.isEditMode) {
        this.saveCanges();
      }
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
    transition: all 0.3s;
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

.section-input {
  border-radius: 5px;
  text-align: center;
  border: 2px solid gray;
  padding: 10px;
  font-size: 25px;
}

.add-section {
  font-weight: 600;
}
</style>

<template>
  <section class="is-one-quarter column">
    <p class="panel-heading">restaurants</p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="search" v-model="query">
        <span class="icon is-small is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <a class="panel-block rest-wrapper" v-for="rest in restsToDisplay" :key="rest.id" @click="openMenu(rest.id)">
      {{rest.name}}
      <span class="panel-icon edit-icon" @click.stop="editMenu(rest.id)">ערוך</span>
    </a>
  </section>
</template>

<script>
export default {
  props: ["restaurants"],
  data() {
    return {
      query: ""
    };
  },
  methods: {
    openMenu(restId) {
      this.$router.push(`/rest/${restId}`);
    },
    editMenu(restId) {
      this.$router.push(`/rest/${restId}/edit`);
    }
  },
  computed: {
    restsToDisplay() {
      return this.restaurants.filter(({ name }) => name.includes(this.query));
    }
  }
};
</script>

<style lang="scss" scoped>
.rest-wrapper {
  display: flex;
  justify-content: space-between;
  span {
    margin-left: 10px;
  }
}
</style>


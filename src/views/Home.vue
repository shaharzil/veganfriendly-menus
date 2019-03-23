<template>
  <section class="columns">
    <restsPanel :restaurants="restaurants"></restsPanel>
    <router-view></router-view>
  </section>
</template>

<script>
import restsPanel from '../components/RestsPanel.component.vue'

export default {
  name: "home",
  created() {
    this.$store.dispatch('loadRests')
    this.$store.dispatch('loadSections')
  },
  components: {
    restsPanel
  },
  computed: {
    restaurants() {
      return this.$store.getters.rests
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

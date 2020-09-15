<template>
  <div class="Site">
    <Nuxt class="Site-content" />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/Navigation/TheFooter.vue'

export default {
  components: {
    TheFooter,
  },
  data() {
    return {
      displaySidenav: false,
    }
  },
  methods: {
    toggleSidenav() {
      this.displaySidenav = !this.displaySidenav
    },
  },
}
</script>

<style>
.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Site-content {
  flex: 1;
}
</style>

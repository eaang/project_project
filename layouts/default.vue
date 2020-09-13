<template>
  <div>
    <TheHeader @toggle-sidenav="toggleSidenav" />
    <TheSidenav :status="displaySidenav" @close="toggleSidenav" />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader.vue'
import TheSidenav from '@/components/Navigation/TheSidenav.vue'
import TheFooter from '@/components/Navigation/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheSidenav,
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

<style></style>

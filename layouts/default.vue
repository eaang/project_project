<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :open="displaySidenav" @close="displaySidenav = false" />
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
}
</script>

<style></style>

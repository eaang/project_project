<template>
  <div class="Site">
    <TheAdminHeader @toggle-sidenav="toggleSidenav" />
    <TheSidenav :status="displaySidenav" @close="toggleSidenav" />
    <Nuxt class="Site-content" />
    <TheFooter />
  </div>
</template>

<script>
import TheAdminHeader from '@/components/Navigation/TheAdminHeader.vue'
import TheSidenav from '@/components/Navigation/TheSidenav.vue'
import TheFooter from '@/components/Navigation/TheFooter.vue'

export default {
  components: {
    TheAdminHeader,
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

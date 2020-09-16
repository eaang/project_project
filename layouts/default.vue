<template>
  <div class="Site">
    <TheHeader v-if="!loggedIn" @toggle-sidenav="toggleSidenav" />
    <TheAdminHeader v-else @toggle-sidenav="toggleSidenav" />
    <TheSidenav :status="displaySidenav" @close="toggleSidenav" />
    <Nuxt class="Site-content" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader.vue'
import TheAdminHeader from '@/components/Navigation/TheAdminHeader.vue'
import TheSidenav from '@/components/Navigation/TheSidenav.vue'
import TheFooter from '@/components/Navigation/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheAdminHeader,
    TheSidenav,
    TheFooter,
  },
  data() {
    return {
      displaySidenav: false,
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    },
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

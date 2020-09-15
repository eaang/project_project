<template>
  <b-navbar :spaced="true" :mobile-burger="false" :transparent="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <figure class="image is-1514x912">
          <img src="~assets/images/cat-face.png" />
        </figure>
      </b-navbar-item>
      <TheSidenavToggle @toggle="$emit('toggle-sidenav')" />
    </template>
    <template slot="start">
      <b-navbar-item href="#"> Home </b-navbar-item>
      <b-navbar-item href="#"> Documentation </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#"> About </b-navbar-item>
        <b-navbar-item href="#"> Contact </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <nuxt-link to="/admin/auth"
            ><b-button class="is-primary"> Log in </b-button></nuxt-link
          >
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import TheSidenavToggle from '@/components/Navigation/TheSidenavToggle.vue'
export default {
  components: {
    TheSidenavToggle,
  },
  computed: {
    loadedProjects() {
      return this.$store.getters.loadedProjects
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
}
.nuxt-link-active {
  color: $primary;
}
</style>

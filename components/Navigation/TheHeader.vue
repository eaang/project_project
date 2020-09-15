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
      <nuxt-link tag="b-navbar-item" to="/" exact>Home</nuxt-link>
      <nuxt-link tag="b-navbar-item" to="/about">About</nuxt-link>
      <nuxt-link tag="b-navbar-item" to="/admin">Admin</nuxt-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <nuxt-link tag="a" class="navbar-link" to="/projects">
          All Projects
        </nuxt-link>
        <div class="navbar-dropdown">
          <nuxt-link
            v-for="project in loadedProjects"
            :key="project.id"
            tag="a"
            class="navbar-item"
            :to="'/projects/' + project.id"
            >{{ project.name }}</nuxt-link
          >
        </div>
      </div>
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

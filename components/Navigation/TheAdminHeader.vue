<template>
  <b-navbar
    :mobile-burger="false"
    type="footer-background-color"
    :fixed-top="true"
  >
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="~assets/images/cat-face.png" />
      </b-navbar-item>
      <TheSidenavToggle @toggle="$emit('toggle-sidenav')" />
    </template>
    <template slot="start">
      <nuxt-link tag="b-navbar-item" to="/" exact>Home</nuxt-link>
      <nuxt-link tag="b-navbar-item" to="/about">About</nuxt-link>
      <nuxt-link tag="b-navbar-item" to="/admin" exact
        >Manage Projects</nuxt-link
      >
      <nuxt-link tag="b-navbar-item" to="/admin/new-project"
        >Add Project</nuxt-link
      >
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
            ><b-button class="is-primary" @click="logoutUser">
              Sign out
            </b-button></nuxt-link
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
  methods: {
    logoutUser() {
      this.$store.dispatch('logoutUser')
      this.$router.push('/admin/auth')
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

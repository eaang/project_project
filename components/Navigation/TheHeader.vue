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
      <nuxt-link class="navbar-item" to="/" exact>Home</nuxt-link>
      <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <nuxt-link class="navbar-link" to="/projects">Projects</nuxt-link>

        <div class="navbar-dropdown is-boxed">
          <nuxt-link to="/projects/1"
            ><b-navbar-item>Project 1</b-navbar-item></nuxt-link
          >

          <nuxt-link to="/projects/2"
            ><b-navbar-item>Project 2</b-navbar-item></nuxt-link
          >
          <nuxt-link to="/projects/3"
            ><b-navbar-item>Project 3</b-navbar-item></nuxt-link
          >
        </div>
      </div>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary"> Log in </a>
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

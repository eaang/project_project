<template>
  <b-navbar :spaced="true" :mobile-burger="false">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>

      <TheSidenavToggle @toggle="$emit('sidenavToggle')" />
    </template>
    <template slot="start">
      <nuxt-link to="/"><b-navbar-item> Home </b-navbar-item></nuxt-link>
      <nuxt-link to="/about"><b-navbar-item> About </b-navbar-item></nuxt-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <nuxt-link class="navbar-link" to="/projects">Projects</nuxt-link>

        <div class="navbar-dropdown">
          <nuxt-link to="/project/1"
            ><b-navbar-item>Project 1</b-navbar-item></nuxt-link
          >

          <nuxt-link to="/project/2"
            ><b-navbar-item>Project 2</b-navbar-item></nuxt-link
          >
          <nuxt-link to="/project/3"
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

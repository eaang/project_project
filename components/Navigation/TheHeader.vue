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
      <b-navbar-item href="#"> Home </b-navbar-item>
      <b-navbar-item href="#"> About </b-navbar-item>
      <b-navbar-dropdown label="Projects">
        <b-navbar-item href="#"> Project 1 </b-navbar-item>
        <b-navbar-item href="#"> Project 2 </b-navbar-item>
        <b-navbar-item href="#"> Project 3 </b-navbar-item>
      </b-navbar-dropdown>
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

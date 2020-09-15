<template>
  <section>
    <b-sidebar
      v-model="open"
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      @close="$emit('close')"
    >
      <div class="p-1">
        <figure class="image is-1216x912">
          <img src="~assets/images/cat-navigation.png" />
        </figure>
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item
              label="Home"
              icon="home"
              tag="nuxt-link"
              to="/"
            ></b-menu-item>
            <b-menu-item
              label="About"
              icon="link"
              tag="nuxt-link"
              to="/about"
            ></b-menu-item>
            <b-menu-item icon="settings" :active="isActive" expanded>
              <template slot="label" slot-scope="props">
                Projects
                <b-icon
                  class="is-pulled-right"
                  :icon="props.expanded ? 'angle-down' : 'angle-up'"
                ></b-icon>
              </template>
              <li v-for="project in loadedProjects" :key="project.id">
                <nuxt-link :to="'/projects/' + project.id">{{
                  project.name
                }}</nuxt-link>
              </li>
            </b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item
              label="Login"
              tag="nuxt-link"
              to="/admin/auth"
            ></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: true,
    }
  },
  computed: {
    open: {
      get() {
        return this.status
      },
      set() {
        return false
      },
    },
    loadedProjects() {
      return this.$store.getters.loadedProjects
    },
  },
}
</script>

<style lang="scss" scoped>
.p-1 {
  padding: 1em;
}
</style>

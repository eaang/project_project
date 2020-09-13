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
            <b-menu-item icon="wrench">
              <template slot="label" slot-scope="props">
                Projects
                <b-icon
                  class="is-pulled-right"
                  :icon="props.expanded ? 'angle-down' : 'angle-up'"
                ></b-icon>
              </template>
              <b-menu-item
                label="All Projects"
                icon="project-diagram"
                tag="nuxt-link"
                to="/projects"
              ></b-menu-item>
              <b-menu-item label="Project 1"></b-menu-item>
              <b-menu-item label="Project 2"></b-menu-item>
              <b-menu-item label="Project 3"></b-menu-item>
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
  },
}
</script>

<style lang="scss" scoped>
.p-1 {
  padding: 1em;
}
</style>

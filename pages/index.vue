<template>
  <div class="homepage">
    <!-- Hero -->
    <HeroSection v-bind="hero" />
    <!-- Read more about me -->
    <section class="section is-medium has-background-dark">
      <div class="container">
        <div class="level">
          <div class="level-left">
            <h1 class="title has-text-light">Wanna know more about me?</h1>
          </div>
          <div class="level-right">
            <div class="columns">
              <div class="column">
                <b-button type="is-success is-large" outlined>Yeah!</b-button>
              </div>
              <div class="column">
                <b-button type="is-danger is-large" outlined>Nah!</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- All Projects -->
    <section class="section">
      <div class="container">
        <p class="title">Latest Projects</p>
        <ProjectList :projects="latestProjects" />
      </div>
    </section>
  </div>
</template>

<script>
import ProjectList from '@/components/Shared/ProjectList.vue'

export default {
  components: {
    ProjectList,
  },
  data() {
    return {
      hero: {
        title: 'The project of projects',
        bodyCopy:
          'An eternal work in progress of things I want to work on, things I am currently working on, things I have forgotten to work on, and things I have finished working on.',
        catPic: require(`~/assets/images/cat-idea.png`),
        hasButton: true,
        buttonText: 'All projects',
        buttonLink: 'projects',
      },
    }
  },
  computed: {
    latestProjects() {
      return this.$store.getters.latestProjects
    },
  },
}
</script>

<style></style>

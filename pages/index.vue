<template>
  <div class="homepage">
    <!-- Hero -->
    <HeroSection v-bind="hero" />
    <!-- Read more about me -->
    <section class="section has-background-dark">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4">
            <img src="~/assets/images/cat-work.png" />
          </div>
          <div class="column">
            <h5 class="subtitle is-5 has-text-light">
              I'm a hobbiyist full-stack developer based in Singapore looking to
              get a bit more professional about things.
            </h5>
            <h5 class="subtitle is-5 has-text-light is-spaced">
              A lot of my career so far has consisted of suggesting web and
              digital ideas to people. So I figured, why not learn how to just
              make them myself?
            </h5>
            <h2 class="title is-3 has-text-light">
              Wanna know more about me?
              <nuxt-link to="/about">Click here!</nuxt-link>
            </h2>
          </div>
        </div>
      </div>
    </section>
    <!-- Latest Projects -->
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
        buttonText: 'Find out more',
        buttonLink: 'projects/the-project-of-projects',
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

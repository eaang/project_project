<template>
  <div class="homepage">
    <!-- Hero -->
    <HeroSection v-bind="hero" />
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
  middleware: ['check-auth'],
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
        buttonText: 'See all projects',
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

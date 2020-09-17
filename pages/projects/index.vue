<template>
  <div class="posts-page">
    <!-- Hero -->
    <HeroSection v-bind="hero" />
    <!-- All Projects -->
    <section class="section">
      <div class="container">
        <p class="title">All Projects</p>
        <ProjectList :projects="loadedProjects" />
      </div>
    </section>
  </div>
</template>

<script>
import HeroSection from '@/components/Shared/HeroSection.vue'
import ProjectList from '@/components/Shared/ProjectList.vue'

export default {
  middleware: ['check-auth'],
  components: {
    HeroSection,
    ProjectList,
  },
  data() {
    return {
      hero: {
        title: 'Projects',
        bodyCopy:
          'There is a reasonable chance that most of these may never be finished. But here they are anyway!',
        catPic: require(`~/assets/images/cat-working.png`),
        hasButton: false,
      },
    }
  },
  computed: {
    loadedProjects() {
      return this.$store.getters.loadedProjects
    },
  },
  head() {
    return {
      title: 'All projects',
    }
  },
}
</script>

<style lang="scss" scoped></style>

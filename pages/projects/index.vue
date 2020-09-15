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
  components: {
    HeroSection,
    ProjectList,
  },
  data() {
    return {
      hero: {
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

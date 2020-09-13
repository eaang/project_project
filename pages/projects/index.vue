<template>
  <div class="posts-page">
    <!-- Hero -->
    <HeroSection v-bind="hero" />
    <!-- Latest Projects -->
    <ProjectList :section-title="'All Projects'" />
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
        catPicDimensions: '1216x912',
        hasButton: false,
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>

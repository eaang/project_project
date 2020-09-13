<template>
  <div class="homepage">
    <!-- Hero -->
    <HeroSection v-bind="hero" />
    <!-- Latest Projects -->
    <ProjectList :section-title="'Latest Projects'" />
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
        catPic: require(`~/assets/images/cat-idea.png`),
        catPicDimensions: '1216x912',
        hasButton: true,
        buttonText: 'See all projects',
      },
    }
  },
}
</script>

<style></style>

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

const projects = [
  {
    id: '1',
    title: 'Project 1',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    thumbnail: 'https://picsum.photos/640/480/',
  },
  {
    id: '2',
    title: 'Project 2',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    thumbnail: 'https://picsum.photos/640/480/',
  },
  {
    id: '3',
    title: 'Project 3',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    thumbnail: 'https://picsum.photos/640/480/',
  },
]

export default {
  components: {
    HeroSection,
    ProjectList,
  },
  asyncData() {
    return {
      loadedProjects: projects,
    }
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

<template>
  <div class="homepage">
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
]

export default {
  components: {
    ProjectList,
  },
  asyncData(context, callback) {
    return {
      loadedProjects: projects,
    }
  },
  data() {
    return {
      hero: {
        title: 'The project of projects',
        bodyCopy:
          'An eternal work in progress of things I want to work on, things I am currently working on, things I have forgotten to work on, and things I have finished working on.',
        catPic: require(`~/assets/images/cat-idea.png`),
        catPicDimensions: '1216x912',
        hasButton: true,
        buttonText: 'See all projects',
        buttonLink: 'projects',
      },
    }
  },
}
</script>

<style></style>

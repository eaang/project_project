<template>
  <div class="homepage">
    <!-- Hero -->
    <section class="hero is-dark is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Website name</h1>
          <h2 class="subtitle">What exacty it is, explanation and stuff.</h2>
        </div>
      </div>
    </section>
    <!-- Latest Projects -->
    <section class="section">
      <div class="container">
        <div class="columns">
          <!-- Repeating Cards Below  -->
          <div v-for="post in latestPosts" :key="post.id" class="column">
            <ProjectCard
              :index="post.id"
              :title="post.title"
              :summary="post.summary"
              :thumbnail="post.thumbnail"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from '@/components/Projects/ProjectCard.vue'

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      latestPosts: [
        {
          index: '1',
          title: 'Project 1',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          thumbnail: 'https://picsum.photos/640/480/',
        },
        {
          index: '2',
          title: 'Project 2',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          thumbnail: 'https://picsum.photos/640/480/',
        },
        {
          index: '3',
          title: 'Project 3',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          thumbnail: 'https://picsum.photos/640/480/',
        },
      ],
    }
  },
}
</script>

<style></style>

<template>
  <div class="homepage">
    <!-- Hero -->
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-two-thirds">
              <h1 class="title">Website name</h1>
              <h2 class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h2>
              <nuxt-link to="/projects">
                <b-button type="is-primary">Browse all projects</b-button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Latest Projects -->
    <section class="section">
      <div class="container">
        <p class="title">Latest Projects</p>
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

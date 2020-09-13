<template>
  <section class="section">
    <div class="container">
      <p class="title">{{ sectionTitle }}</p>
      <div class="columns">
        <!-- Repeating Cards Below  -->
        <div v-for="post in postsToShow" :key="post.id" class="column">
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
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      default: '',
    },
    postsToShow: {
      type: Array,
      default: () => [
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
    },
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="columns">
    <!-- Repeating Cards Below  -->
    <div
      v-for="project in projects"
      :key="project.id"
      class="column is-one-third"
    >
      <ProjectCard
        :id="project.id"
        :is-admin="isAdmin"
        :title="project.title"
        :summary="project.summary"
        :thumbnail="project.thumbnail"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    sectionTitle: {
      type: String,
      default: '',
    },
    projects: {
      type: Array,
      required: true,
      default: () => [
        {
          id: '1',
          title: 'Project 1',
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

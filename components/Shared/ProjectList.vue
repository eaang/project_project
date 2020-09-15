<template>
  <div class="columns is-multiline">
    <!-- Repeating Cards Below  -->
    <div
      v-for="project in projects"
      :key="project.id"
      class="column is-one-third"
    >
      <ProjectCard
        :id="project.id"
        :is-admin="isAdmin"
        :name="project.name"
        :summary="project.summary"
        :thumbnail="pictureUrl(project.images)"
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
  methods: {
    pictureUrl(images) {
      if (typeof images !== 'undefined') {
        return this.$cloudinary().url(images[0], {
          crop: 'scale',
          width: 400,
          height: 300,
        })
      } else {
        return 'https://picsum.photos/400/300/'
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>

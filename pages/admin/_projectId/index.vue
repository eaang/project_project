<template>
  <div class="admin-new-project-page">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Edit This Project</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-two-thirds">
            <ProjectEditForm :project="project" />
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectEditForm from '@/components/Shared/ProjectEditForm.vue'

export default {
  components: {
    ProjectEditForm,
  },
  data() {
    return {
      project: {
        name: 'The Project Project',
        languages: [
          'HTML',
          'CSS',
          'Javascript',
          'Bulma',
          'Buefy',
          'Vue',
          'Nuxt',
        ],
        summary: 'A project to hold all my other projects!',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        dropFiles: [],
        progress: 8,
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>

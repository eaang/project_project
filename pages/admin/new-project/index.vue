<template>
  <div class="admin-new-project-page">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Add a New Project</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds">
            <ProjectEditForm @submit="onSubmitted" />
          </div>
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
  methods: {
    onSubmitted(projectData) {
      this.$axios
        .$post(
          'https://the-projects-project.firebaseio.com/projects.json',
          projectData
        )
        .then((res) => {
          this.$router.push('/admin')
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>

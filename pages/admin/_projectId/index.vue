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
            <ProjectEditForm :project="project" @submit="saveProject" />
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
  async asyncData({ params, $axios }) {
    const projectData = await $axios.$get(
      'https://the-projects-project.firebaseio.com/projects/' +
        params.projectId +
        '.json'
    )
    return { project: projectData }
  },
  methods: {
    saveProject(editedProject) {
      this.$store.dispatch('editProject', editedProject).then(() => {
        this.$router.push('/admin')
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>

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
        id: '1',
        description: 'A project to hold other projects.',
        github: '',
        images: [
          'projects/gzmpo4abib15yesjaeep',
          'projects/sh2dnhcx9nqzypl7ysqw',
        ],
        languages: ['HTML', 'CSS', 'Bulma', 'Buefy', 'Vue', 'Nuxt'],
        link: 'http://testlink.io',
        name: 'The Project of Projects',
        progress: 7,
        summary: 'A project to hold other projects.',
        dropFiles: [],
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>

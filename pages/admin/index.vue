<template>
  <div class="admin-page">
    <section class="section">
      <div class="container">
        <h1 class="title">Create Post</h1>
      </div>
    </section>
    <ProjectList :section-title="'All Projects'" />
  </div>
</template>

<script>
import ProjectList from '@/components/Shared/ProjectList.vue'

export default {
  components: {
    ProjectList,
  },
}
</script>

<style lang="scss" scoped></style>

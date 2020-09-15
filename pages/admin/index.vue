<template>
  <div class="admin-page">
    <!-- All Projects -->
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="title">Manage Projects</p>
          </div>
          <div class="column is-narrow">
            <nuxt-link to="/admin/new-project"
              ><button class="button is-primary">
                Create new project
              </button></nuxt-link
            >
          </div>
        </div>
        <b-table
          :data="isEmpty ? [] : projects"
          :bordered="isBordered"
          :striped="isStriped"
          :narrowed="isNarrowed"
          :hoverable="isHoverable"
          :loading="isLoading"
          :focusable="isFocusable"
          :mobile-cards="hasMobileCards"
        >
          <b-table-column
            v-slot="props"
            centered
            field="index"
            label="No."
            width="40"
            numeric
          >
            {{ props.index + 1 }}
          </b-table-column>

          <b-table-column v-slot="props" field="name" label="Project Name">
            {{ props.row.name }}
          </b-table-column>

          <b-table-column v-slot="props" field="summary" label="Description">
            {{ props.row.summary }}
          </b-table-column>

          <b-table-column v-slot="props" field="status" label="Status" centered>
            {{ props.row.progress * 10 }}%
          </b-table-column>

          <b-table-column
            v-slot="props"
            label="Actions"
            centered
            custom-key="actions"
          >
            <button class="button is-light">
              <nuxt-link :to="'/projects/' + props.row.id">
                <b-icon icon="eye" type="is-success"></b-icon
              ></nuxt-link>
            </button>
            <button class="button is-light">
              <nuxt-link :to="'/admin/' + props.row.id">
                <b-icon icon="edit" type="is-primary"></b-icon
              ></nuxt-link>
            </button>
            <button class="button is-light" @click="deleteProject(props.row)">
              <b-icon icon="trash" type="is-danger"></b-icon>
            </button>
          </b-table-column>
        </b-table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true,
    }
  },
  computed: {
    projects() {
      return this.$store.getters.loadedProjects
    },
  },
  methods: {
    deleteProject(project) {
      this.$store.dispatch('deleteProject', project).then(() => {
        this.$router.push('/admin')
      })
    },
  },
  head: {
    title: 'Admin',
  },
}
</script>

<style lang="scss" scoped></style>

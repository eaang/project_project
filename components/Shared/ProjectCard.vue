<template>
  <!-- This is a crad -->
  <div class="card">
    <div class="card-image">
      <nuxt-link :to="postLink">
        <figure class="image is-4by3">
          <img :src="thumbnail" :alt="title" /></figure
      ></nuxt-link>
    </div>
    <b-collapse class="card" animation="slide" :aria-id="id" :open="false">
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        :aria-controls="id"
      >
        <p class="card-header-title">{{ title }}</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'angle-down' : 'angle-up'"> </b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          {{ summary }}
          <a>#buefy</a>.
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    isAdmin: {
      type: Boolean,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/projects/' + this.id
    },
  },
}
</script>

<style lang="scss" scoped></style>

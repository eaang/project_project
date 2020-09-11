<template>
  <!-- This is a crad -->
  <div class="card">
    <div class="card-image">
      <nuxt-link :to="'/projects/' + index">
        <figure class="image is-4by3">
          <img :src="thumbnail" :alt="title" /></figure
      ></nuxt-link>
    </div>
    <b-collapse class="card" animation="slide" :aria-id="index">
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        :aria-controls="index"
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
      <footer class="card-footer">
        <a class="card-footer-item">Edit</a>
        <a class="card-footer-item">Delete</a>
      </footer>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    index: {
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
}
</script>

<style lang="scss" scoped></style>

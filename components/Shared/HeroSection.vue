<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-two-thirds">
            <h1 class="title">{{ title }}</h1>
            <!-- eslint-disable-next-line prettier/prettier -->
            <h2 class="subtitle" style="white-space: pre-line">{{ bodyCopy }}</h2>
            <nuxt-link :to="'/' + buttonLink">
              <b-button v-if="hasButton" type="is-primary">
                {{ buttonText }}
              </b-button>
            </nuxt-link>
          </div>
          <div class="column">
            <img :src="catPic" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title Text',
    },
    bodyCopy: {
      type: String,
      default: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    catPic: {
      type: String,
      default: require('~/assets/images/cat-default.png'),
    },
    hasButton: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: 'Button Text',
    },
    buttonLink: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>

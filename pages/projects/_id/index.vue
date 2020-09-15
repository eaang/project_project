<template>
  <div class="single-post-page">
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ project.name }}</h1>
          <h2 class="subtitle">
            {{ project.summary }}
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column">
            <b-carousel :indicator-inside="false">
              <b-carousel-item v-for="(publicId, i) in project.images" :key="i">
                <span class="image" @click="isImageModalActive = true">
                  <img :src="getImgUrl(publicId)" />
                </span>
              </b-carousel-item>
            </b-carousel>
          </div>

          <div class="column">
            <div class="content">
              <h3>Languages used</h3>
              <b-taglist>
                <b-tag
                  v-for="language in project.languages"
                  :key="language"
                  type="is-primary"
                >
                  {{ language }}
                </b-tag>
              </b-taglist>
              <h3>Completion status</h3>
              <b-progress
                type="is-success"
                value="80"
                format="percent"
                size="is-large"
                show-value
              ></b-progress>
              <h3>What is this about?</h3>
              <p class="project-info">
                {{ project.description }}
              </p>
              <h3>
                <b-button type="is-primary" expanded>Visit Project</b-button>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    callback(null, {
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
      },
    })
  },
  data() {
    return {
      gallery: false,
    }
  },
  methods: {
    getImgUrl(publicId) {
      return this.$cloudinary().url(publicId, {
        crop: 'scale',
        width: 800,
        height: 600,
      })
    },
    switchGallery(value) {
      this.gallery = value
      if (value) {
        return document.documentElement.classList.add('is-clipped')
      } else {
        return document.documentElement.classList.remove('is-clipped')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}
</style>

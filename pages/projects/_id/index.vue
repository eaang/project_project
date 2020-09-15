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
            <!-- Displays a single image, carousel, or a 'no image' placeholder -->
            <div class="mb-3">
              <b-carousel
                v-if="
                  typeof project.images !== 'undefined' &&
                  project.images.length > 1
                "
                :indicator-inside="false"
              >
                <b-carousel-item
                  v-for="(publicId, i) in project.images"
                  :key="i"
                >
                  <span class="image" @click="isImageModalActive = true">
                    <img :src="getImgUrl(publicId)" />
                  </span>
                </b-carousel-item>
              </b-carousel>
              <figure
                v-else-if="project.images.length === 1"
                class="image is-800x600"
              >
                <img :src="getImgUrl(project.images[0])" />
              </figure>
              <figure v-else class="image is-800x600">
                <img src="~/assets/images/placeholder.jpg" />
              </figure>
            </div>
            <b-button type="is-primary" expanded>Visit Project</b-button>
          </div>

          <div class="column">
            <div class="content">
              <h3>What is this about?</h3>
              <!-- eslint-disable-next-line prettier/prettier -->
              <p class="pre-formatted project-info">
                {{ project.description }}
              </p>
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
                :type="setColor(project.progress)"
                :value="project.progress * 10"
                format="percent"
                size="is-large"
                show-value
              ></b-progress>
              <div class="columns is-gapless">
                <div class="column">
                  <h3>Created on</h3>
                  <p>{{ createdDate }}</p>
                </div>
                <div class="column">
                  <h3>Last updated</h3>
                  <p>{{ updatedDate }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { format } from 'date-fns'
export default {
  async asyncData({ params, $axios }) {
    const projectData = await $axios.$get(
      'https://the-projects-project.firebaseio.com/projects/' +
        params.id +
        '.json'
    )
    return { project: projectData }
  },
  data() {
    return {
      gallery: false,
    }
  },
  computed: {
    createdDate() {
      return format(Date.parse(this.project.createdOn), 'P, p')
    },
    updatedDate() {
      return format(Date.parse(this.project.editedOn), 'P, p')
    },
  },
  methods: {
    getImgUrl(publicId) {
      return this.$cloudinary().url(publicId, {
        crop: 'fill',
        width: 800,
        height: 600,
      })
    },
    setColor(status) {
      if (status > 2.5 && status < 7.5) {
        return 'is-warning'
      } else if (status >= 7.5) {
        return 'is-success'
      }
      return 'is-danger'
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
  head() {
    return {
      title: this.project.name,
    }
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
.pre-formatted {
  white-space: pre-line;
}
</style>

<template>
  <div class="new-project-form">
    <!-- Name and Languages -->
    <b-field label="Project Name">
      <b-input v-model="form.name"></b-input>
    </b-field>
    <b-field label="Languages Used">
      <b-taginput
        v-model="form.languages"
        :data="filteredTags"
        autocomplete
        :allow-new="allowNew"
        :open-on-focus="openOnFocus"
        icon="tag"
        placeholder="Add a language"
        @typing="getFilteredTags"
      >
      </b-taginput>
    </b-field>

    <!-- Progress and Description -->
    <label class="label">Current Progress</label>
    <b-field>
      <b-slider
        v-model="form.progress"
        :custom-formatter="(val) => val * 10 + '%'"
        :min="0"
        :max="10"
        :tooltip-type="sliderType"
        :type="sliderType"
        ticks
      ></b-slider>
    </b-field>
    <b-field label="Short Summary">
      <b-input v-model="form.summary"></b-input>
    </b-field>
    <b-field label="Description">
      <b-input v-model="form.description" type="textarea"></b-input>
    </b-field>

    <!-- Project Images -->
    <label class="label">Project Screenshots </label>
    <b-field>
      <b-upload v-model="form.dropFiles" multiple drag-drop expanded>
        <section class="section">
          <div class="content has-text-centered">
            <p>
              <b-icon icon="upload" size="is-large"> </b-icon>
            </p>
            <p>Drop your files here or click to upload</p>
          </div>
        </section>
      </b-upload>
    </b-field>
    <b-field v-if="form.dropFiles.length > 0">
      <div class="tile is-ancestor" style="flex-wrap: wrap">
        <div
          v-for="(file, index) in form.dropFiles"
          :key="index"
          class="tile is-parent is-3"
        >
          <div class="tile is-child box">
            <figure class="image">
              <img :src="showImage(file)" />
              <button
                style="position: absolute; top: 0; right: 0"
                class="delete is-small"
                type="button"
                @click="deleteDropFile(index)"
              ></button>
            </figure>
            <div class="is-size-7">{{ file.name }}</div>
          </div>
        </div>
      </div>
    </b-field>
    <b-field grouped position="is-centered">
      <div class="control">
        <b-button type="is-primary" @click="saveProject">Save Project</b-button>
      </div>
      <div class="control">
        <b-button type="is-warning" @click="cancelProject">Cancel</b-button>
      </div>
    </b-field>
  </div>
</template>

<script>
const data = [
  'Ruby',
  'Rails',
  'HTML',
  'CSS',
  'Javascript',
  'Vue',
  'React',
  'Buefy',
  'Bulma',
  'Nuxt',
]

export default {
  props: {
    project: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      filteredTags: data.sort(),
      isSelectOnly: false,
      tags: [],
      allowNew: false,
      openOnFocus: true,
      form: this.project
        ? {
            ...this.project,
          }
        : {
            name: '',
            languages: [],
            summary: '',
            description: '',
            dropFiles: [],
            progress: 0,
          },
    }
  },
  computed: {
    sliderType() {
      if (this.form.progress > 2.5 && this.form.progress < 7.5) {
        return 'is-warning'
      } else if (this.form.progress >= 7.5) {
        return 'is-success'
      }
      return 'is-danger'
    },
  },
  methods: {
    getFilteredTags(text) {
      this.filteredTags = data.filter((option) => {
        return option.toString().toLowerCase().includes(text.toLowerCase())
      })
    },
    deleteDropFile(index) {
      this.form.dropFiles.splice(index, 1)
    },
    saveProject() {
      // Save the post
      console.log(this.form)
    },
    cancelProject() {
      // Cancel the post
      this.$router.push('/admin')
    },
    showImage(file) {
      return URL.createObjectURL(file)
    },
  },
}
</script>

<style lang="scss" scoped></style>
<template>
  <div class="admin-new-project-page">
    <section class="section new-project-form">
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-two-thirds">
            <div class="title">Add New Project</div>

            <!-- Name and Languages -->
            <b-field label="Name">
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
            <label class="label">Current Progress {{ form.progress }}</label>
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
            <label class="label"
              >Project Screenshots
              <div class="tags mt-1">
                <span
                  v-for="(file, index) in form.dropFiles"
                  :key="index"
                  class="tag is-primary"
                >
                  {{ file.name }}
                  <button
                    class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)"
                  ></button>
                </span></div
            ></label>
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

            <div class="field is-grouped is-grouped-centered">
              <div class="control">
                <button class="button is-primary" @click="saveProject">
                  Submit
                </button>
              </div>
              <div class="control">
                <button class="button is-warning" @click="cancelProject">
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const data = ['Ruby', 'Rails', 'HTML', 'CSS', 'Javascript', 'Vue', 'React']

export default {
  data() {
    return {
      filteredTags: data,
      isSelectOnly: false,
      tags: [],
      allowNew: false,
      openOnFocus: false,
      form: {
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
  },
}
</script>

<style lang="scss" scoped></style>

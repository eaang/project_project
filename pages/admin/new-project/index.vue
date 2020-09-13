<template>
  <div class="admin-new-project-page">
    <section class="section new-project-form">
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-two-thirds">
            <div class="title">Add New Project</div>

            <!-- Name and Languages -->
            <div class="field is-horizontal">
              <div class="field-body">
                <b-field label="Name">
                  <b-input v-model="form.name"></b-input>
                </b-field>
                <b-field label="Languages Used">
                  <b-taginput
                    v-model="tags"
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
              </div>
            </div>

            <!-- About the Project -->
            <label class="label">Current Progress</label>
            <b-field>
              <b-slider
                v-model="sliderValue"
                :custom-formatter="(sliderValue) => sliderValue * 10 + '%'"
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
              <span class="tags mb-1">
                <span
                  v-for="(file, index) in form.dropFiles"
                  :key="index"
                  class="tag is-primary mb-0"
                >
                  {{ file.name }}
                  <button
                    class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)"
                  ></button> </span></span
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
                <button class="button is-primary">Submit</button>
              </div>
              <div class="control">
                <button class="button is-warning">Cancel</button>
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
      sliderValue: 0,
      form: {
        name: '',
        languages: [],
        selected: null,
        summary: '',
        description: '',
        dropFiles: [],
        progress: 0,
      },
    }
  },
  computed: {
    progress() {
      return this.sliderValue * 10
    },
    sliderType() {
      if (this.sliderValue > 2.5 && this.sliderValue < 7.5) {
        return 'is-warning'
      } else if (this.sliderValue >= 7.5) {
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
    onSave() {
      // Save the post
      console.log(this.form)
    },
    onCancel() {
      // Cancel the post
      this.$router.push('/admin')
    },
  },
}
</script>

<style lang="scss" scoped></style>

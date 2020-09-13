<template>
  <div class="admin-new-project-page">
    <section class="section new-project-form">
      <div class="container">
        <div class="title">Add New Project</div>
        <div class="columns">
          <div class="column">
            <b-field label="Name">
              <b-input v-model="form.name"></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Languages Used">
              <b-taginput
                v-model="tags"
                :data="filteredTags"
                autocomplete
                :allow-new="allowNew"
                :open-on-focus="openOnFocus"
                icon="tag"
                placeholder="Add a tag"
                @typing="getFilteredTags"
              >
              </b-taginput>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Thumbnail">
              <b-field
                class="file is-primary"
                :class="{ 'has-name': !!form.file }"
              >
                <b-upload v-model="form.file" class="file-label">
                  <span class="file-cta">
                    <b-icon class="file-icon" icon="upload"></b-icon>
                    <span class="file-label">Click to upload</span>
                  </span>
                  <span v-if="form.file" class="file-name">
                    {{ form.file.name }}
                  </span>
                </b-upload>
              </b-field>
            </b-field>
          </div>
        </div>
        <b-field label="Short Summary">
          <b-input v-model="summary"></b-input>
        </b-field>
        <b-field label="Description">
          <b-input v-model="description" type="textarea"></b-input>
        </b-field>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary">Submit</button>
          </div>
          <div class="control">
            <button class="button is-warning">Cancel</button>
          </div>
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
        selected: null,
        summary: '',
        description: '',
        file: null,
      },
    }
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
      // S  ave the post
    },
    onCancel() {
      // Cancel the post
    },
  },
}
</script>

<style lang="scss" scoped></style>

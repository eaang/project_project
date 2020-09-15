<template>
  <div class="new-project-form">
    <!-- Name and Languages -->
    <b-field label="Project Name">
      <b-input v-model.lazy="form.name"></b-input>
    </b-field>
    <b-field grouped>
      <b-field label="URL" expanded>
        <b-input v-model.lazy="form.link" expanded></b-input>
      </b-field>
      <b-field label="Github Repository" expanded>
        <b-input v-model.lazy="form.github" expanded></b-input>
      </b-field>
    </b-field>
    <b-field label="Languages Used">
      <b-taginput
        v-model.lazy="form.languages"
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
        v-model.lazy="form.progress"
        :custom-formatter="(val) => val * 10 + '%'"
        :min="0"
        :max="10"
        :tooltip-type="sliderType"
        :type="sliderType"
        ticks
      ></b-slider>
    </b-field>
    <b-field label="Short Summary">
      <b-input v-model.lazy="form.summary"></b-input>
    </b-field>
    <b-field label="Description">
      <b-input v-model.lazy="form.description" type="textarea"></b-input>
    </b-field>

    <!-- Project Images -->
    <label class="label">Project Screenshots </label>
    <b-field>
      <b-upload v-model.lazy="form.dropFiles" multiple drag-drop expanded>
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
    <!-- Tiles to show uploaded images (first displays existing, then uploded images) -->
    <b-field v-if="form.dropFiles.length > 0 || form.images.length > 0">
      <div class="tile is-ancestor" style="flex-wrap: wrap">
        <!-- Existing images -->
        <div
          v-for="(file, index) in form.images"
          :key="index"
          class="tile is-parent is-3"
        >
          <div class="tile is-child box">
            <figure class="image">
              <img :src="showExistingImage(file)" />
              <button
                style="position: absolute; top: 0; right: 0"
                class="delete is-small"
                type="button"
                @click="deleteExistingImage(index)"
              ></button>
            </figure>
            <div class="is-size-7">{{ file.name }}</div>
          </div>
        </div>
        <!-- Dropped imgaes (new) -->
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
      files: [],
      isError: false,
      errorText: null,
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
            description: '',
            github: '',
            images: [],
            languages: [],
            link: '',
            name: '',
            progress: 0,
            summary: '',
            dropFiles: [],
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
    saveProject() {
      this.form.dropFiles.forEach((file) => {
        this.uploadFileToCloudinary(file)
          .then((fileResponse) => {
            if (typeof fileResponse.public_id === typeof String()) {
              this.form.images.push(fileResponse.public_id)
            }
          })
          .then(() => {
            if (this.form.images.length === this.form.dropFiles.length) {
              this.$emit('submit', this.form)
            }
          })
      })
    },
    cancelProject() {
      // Cancel the post
      this.$router.push('/admin')
    },
    showImage(file) {
      return URL.createObjectURL(file)
    },
    deleteDropFile(index) {
      this.form.dropFiles.splice(index, 1)
    },
    showExistingImage(file) {
      return this.$cloudinary().url(file)
    },
    deleteExistingImage(index) {
      this.form.images.splice(index, 1)
    },
    uploadFileToCloudinary(file) {
      return new Promise(function (resolve, reject) {
        // Ideally these two lines would be in a .env file
        const CLOUDINARY_URL = process.env.CLOUDINARY_URL
        const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET

        const formData = new FormData()
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        formData.append('folder', 'projects')
        formData.append('file', file)

        const request = new XMLHttpRequest()
        request.open('POST', CLOUDINARY_URL, true)
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

        request.onreadystatechange = () => {
          // File uploaded successfully
          if (request.readyState === 4 && request.status === 200) {
            const response = JSON.parse(request.responseText)
            resolve(response)
          }

          // Not succesfull, let find our what happened
          if (request.status !== 200) {
            const response = JSON.parse(request.responseText)
            const error = response.error.message
            alert('error, status code not 200 ' + error)
            reject(error)
          }
        }

        request.onerror = (err) => {
          alert('error: ' + err)
          reject(err)
        }

        request.send(formData)
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>

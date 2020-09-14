<template>
  <div class="admin-new-project-page">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Add a New Project</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds">
            <ProjectEditForm @submit="onSubmitted" />
          </div>
        </div>
      </div>
    </section>

    <section class="alerts">
      <div v-if="files.length > 0">
        <b-notification
          v-for="file in files"
          :key="file.public_id"
          type="is-success is-light"
          aria-close-label="Close notification"
        >
          File uploaded: {{ file.original_filename }} at {{ file.url }}
        </b-notification>
      </div>

      <div v-if="isError">
        <b-notification
          type="is-warning is-light"
          aria-close-label="Close notification"
          role="alert"
        >
          {{ errorText }}
        </b-notification>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectEditForm from '@/components/Shared/ProjectEditForm.vue'

export default {
  components: {
    ProjectEditForm,
  },
  data() {
    return {
      files: [],
      isError: false,
      errorText: null,
    }
  },
  methods: {
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
    onSubmitted(projectData) {
      const files = projectData.dropFiles
      if (files.length > 0) {
        files.forEach((file) => {
          console.log(file)
          this.uploadFileToCloudinary(file).then((fileResponse) => {
            this.files.push(fileResponse)
          })
        })
      }
      //  this.$axios
      // .$post(
      //   'https://the-projects-project.firebaseio.com/projects.json',
      //   projectData
      // )
      // .then((result) => console.log(result))
      // .catch((e) => console.log(e))
    },
  },
}
</script>

<style lang="scss" scoped></style>

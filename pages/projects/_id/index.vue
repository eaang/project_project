<template>
  <div class="single-post-page">
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Project name goes here</h1>
          <h2 class="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </div>
      </div>
    </section>
    <section class="section project-info">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <figure class="image is-4by3">
              <img
                src="https://picsum.photos/640/480/"
                alt="placeholder image"
              />
            </figure>
          </div>
          <div class="column">
            <div class="content">
              <div class="columns">
                <div class="column">
                  <h3>Languages Used</h3>
                  <b-taglist>
                    <b-tag type="is-info">First</b-tag>
                    <b-tag type="is-info">Second</b-tag>
                    <b-tag type="is-info">Third</b-tag>
                    <b-tag type="is-info">Fourth</b-tag>
                    <b-tag type="is-info">Fifth</b-tag>
                  </b-taglist>
                </div>
                <div class="column">
                  <h3>Current status</h3>
                  <b-progress
                    type="is-success"
                    :value="60"
                    show-value
                  ></b-progress>
                </div>
              </div>
              <h3>What is this about?</h3>
              <p class="project-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <b-button type="is-primary">Visit Project</b-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>

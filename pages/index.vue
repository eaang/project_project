<template>
  <div class="homepage">
    <!-- Hero -->
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Website name</h1>
          <h2 class="subtitle">What exacty it is, explanation and stuff.</h2>
        </div>
      </div>
    </section>
    <!-- Introduction (short para?) -->
    <section class="section is-dark">
      <div class="container"></div>
    </section>
    <!-- Latest Projects -->
    <section class="section">
      <div class="container">
        <div class="columns">
          <!-- Repeating Cards Below  -->
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <b-collapse animation="slide" aria-id="contentIdForA11y3">
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="contentIdForA11y3"
                >
                  <p class="card-header-title">Component</p>
                  <a class="card-header-icon">
                    <b-icon :icon="props.open ? 'angle-down' : 'angle-up'">
                    </b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                    <a>#buefy</a>.
                  </div>
                </div>
                <footer class="card-footer">
                  <a class="card-footer-item">Save</a>
                  <a class="card-footer-item">Edit</a>
                  <a class="card-footer-item">Delete</a>
                </footer>
              </b-collapse>
            </div>
          </div>

          <div class="column"></div>

          <div class="column"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

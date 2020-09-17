<template>
  <div class="about-page">
    <!-- Hero -->
    <section class="hero is-dark is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-two-thirds">
              <div class="title is-2 pb-3">
                Looking for a
                <span class="has-text-primary">ROCKSTAR DEVELOPER</span> and
                <span class="has-text-success">1337 H4X0R NINJA CODER</span> who
                is super up to date with the
                <span class="has-text-warning">TRENDIEST TECH FRAMEWORKS</span>
                to make the
                <class class="has-text-danger">NEXT BIG INTERNET THING</class>?
              </div>
              <div class="subtitle is-4">
                Then you may want to search elsewhere, because I am probably not
                the
                <s>droids</s> person you are looking for.
              </div>
            </div>
            <div class="column">
              <img src="~/assets/images/cat-letters.png" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Me -->
    <section class="section is-medium">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <h1 class="title is-2">Who am I?</h1>
          </div>
          <div class="column">
            <h2 class="subtitle is-4">
              <p>
                I'm <strong>Evan Ang</strong>, some kind of
                <span
                  class="description has-text-primary"
                  @click="changeWord"
                  >{{ word }}</span
                >
                who likes working on a) fun stuff and b) stuff for fun! My
                favourite projects are those that can generally be described
                with adjectives like <i>nifty</i>, <i>quick</i>, <i>short</i>,
                <i>achievable</i> and <i>straightforward</i>.
              </p>
            </h2>
          </div>
        </div>
        <hr />
        <div class="columns">
          <div class="column is-one-third">
            <h1 class="title is-2">What do I know?</h1>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column">
                <h4 class="title"><u>Pretty Okay</u></h4>
                <div class="tags are-medium">
                  <span class="tag is-primary">Bog-standard HTML</span>
                  <span class="tag is-primary">CSS</span>
                  <span class="tag is-primary">SASS</span>
                  <span class="tag is-primary">Javascript (ES5 + ES6)</span>
                  <span class="tag is-primary">Bootstrap 4</span>
                  <span class="tag is-primary">Ruby</span>
                  <span class="tag is-primary">Rails</span>
                </div>
              </div>
              <div class="column">
                <h4 class="title 4">
                  <u>Kinda Familiar</u>
                </h4>
                <div class="tags are-medium">
                  <span class="tag is-info">Stimulus</span>
                  <span class="tag is-info">SQLite / PostgreSQL</span>
                  <span class="tag is-info">Tailwind CSS</span>
                  <span class="tag is-info">Bulma / Buefy</span>
                  <span class="tag is-info">Vue</span>
                  <span class="tag is-info">Nuxt</span>
                  <span class="tag is-info">Firebase</span>
                  <span class="tag is-info">Heroku</span>
                  <span class="tag is-info">Git</span>
                  <span class="tag is-info">Figma</span>
                  <span class="tag is-info">Wordpress</span>
                </div>
              </div>
              <div class="column">
                <h4 class="title">
                  <u>Still Learning</u>
                </h4>
                <div class="tags are-medium">
                  <span class="tag is-warning">GraphQL</span>
                  <span class="tag is-warning">Contentful</span>
                  <span class="tag is-warning">React</span>
                  <span class="tag is-warning">MongoDB</span>
                  <span class="tag is-warning">Adobe XD</span>
                  <span class="tag is-warning">Typescript</span>
                  <span class="tag is-warning">Typescript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="columns">
          <div class="column is-one-third">
            <h1 class="title is-2">Wanna know more?</h1>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column">
                <b-button
                  tag="a"
                  target="_blank"
                  href="https://github.com/eaang/"
                  icon-pack="fab"
                  icon-left="github"
                  type="is-primary is-large"
                  outlined
                  expanded
                  >Github</b-button
                >
              </div>
              <div class="column">
                <b-button
                  tag="a"
                  target="_blank"
                  href="https://www.linkedin.com/in/evanaang/"
                  icon-pack="fab"
                  icon-left="linkedin"
                  type="is-primary is-large"
                  outlined
                  expanded
                  >LinkedIn</b-button
                >
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-button
                  tag="a"
                  target="_blank"
                  href="https://pdfhost.io/v/scFNYzBUL_Evan_Ang_CVpdf.pdf"
                  icon-left="file-download"
                  type="is-primary is-large"
                  outlined
                  expanded
                  >Check out my CV</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section is-medium has-background-dark">
      <div class="container">
        <div class="columns is-centered is-vcentered">
          <div class="column">
            <img src="@/assets/images/cat-message.png" />
          </div>
          <div class="column is-two-thirds box py-6">
            <div class="columns is-centered">
              <div class="column is-10">
                <h1 class="title has-text-centered">
                  Or just send me a message!
                </h1>
                <b-field label="Your name" :label-position="labelPosition">
                  <b-input placeholder="Insert name here"></b-input>
                </b-field>
                <b-field label="Your email" :label-position="labelPosition">
                  <b-input
                    placeholder="If you want me to get back in touch!"
                  ></b-input>
                </b-field>
                <b-field label="Your message" :label-position="labelPosition">
                  <b-input
                    type="textarea"
                    placeholder="Puns optional, but always appreciated."
                  ></b-input>
                </b-field>
                <b-field>
                  <b-button
                    icon-right="paper-plane"
                    type="is-primary is-large"
                    expanded
                    >Let's gooooooo</b-button
                  >
                </b-field>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'on-border',
      position: 'is-right',
      size: 'is-large',
      clickable: true,
      val: 1,
      word: 'hobbiyist developer',
      words: [
        'hobbiyist developer',
        'professional bullshitter',
        'content strategist',
        'stackoverflow lurker',
        'marketing copywriter',
        'adventure games fan',
        'riddle enthusiast',
        'person who is very good at googling',
        'supposed award winning author',
        'hobby collector',
        'bubble tea enthusiast',
        'wannabe tarantula addict',
        'extremely amateur photographer',
      ],
    }
  },
  methods: {
    changeWord() {
      if (this.val === this.words.length) {
        this.val = 0
      }
      this.word = this.words[this.val]
      this.val++
    },
  },
}
</script>

<style lang="scss" scoped>
.description {
  cursor: pointer;
  text-decoration-line: underline;
  text-decoration-style: wavy;
}
</style>

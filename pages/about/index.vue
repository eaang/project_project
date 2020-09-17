<template>
  <div class="about-page">
    <!-- Hero -->
    <!-- <HeroSection v-bind="hero" /> -->
    <section class="hero is-info is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-two-thirds">
              <div class="title is-2 pb-3">
                Are you looking for a ROCKSTAR developer and NINJA coder who is
                SUPER UP TO DATE with the latest tech trends and fancy
                frameworks to make the NEXT BIG THING in the GIG ECONOMY or
                STARTUP LAND?
              </div>
              <div class="subtitle is-4">
                Then I am probably not the <s>droids</s> man you are looking
                for.
              </div>
            </div>
            <div class="column">
              <img src="~/assets/images/cat-letters.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: ['check-auth'],
}
</script>

<style lang="scss" scoped></style>

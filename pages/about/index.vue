<template>
  <div class="about-page">
    <!-- Hero -->
    <HeroSection v-bind="hero" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: {
        title: 'A little about me',
        bodyCopy:
          'Are you looking for a ROCKSTAR developer and NINJA coder who is SUPER UP TO DATE with the latest tech trends and fancy frameworks to make the NEXT BIG THING in the GIG ECONOMY or STARTUP LAND? \nThen I am probably not your man.',
        catPic: require(`~/assets/images/cat-letters.png`),
        hasButton: false,
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>

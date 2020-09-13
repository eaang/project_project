<template>
  <HeroSection v-bind="hero" />
</template>

<script>
import HeroSection from '@/components/Shared/HeroSection.vue'

export default {
  components: {
    HeroSection,
  },
  data() {
    return {
      hero: {
        title: 'Oh no! Something went wrong.',
        bodyCopy: 'Maybe you should try searching somewhere else instead?',
        catPic: require('~/assets/images/cat-lost.png'),
        catPicDimensions: '1216x912',
        hasButton: true,
        buttonText: 'Return home',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>

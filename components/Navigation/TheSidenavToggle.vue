<template>
  <a
    role="button"
    class="navbar-burger"
    aria-label="menu"
    aria-expanded="false"
    @click="$emit('toggle')"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>

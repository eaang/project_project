<template>
  <footer class="footer">
    <div class="columns is-mobile is-gapless">
      <div class="column align-items-center justify-content-end">
        <span class="has-text-info">
          all cat pics from
          <a href="https://icons8.com/illustrations/style--ginger-cat-1">
            icons8</a
          >!
        </span>
      </div>
      <div
        class="column is-3-mobile is-2-tablet is-1-desktop align-items-center"
      >
        <img src="~/assets/images/cat-photo.png" alt="" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.align-items-center {
  display: flex;
  align-items: center;
}
.justify-content-end {
  justify-content: end;
}
</style>

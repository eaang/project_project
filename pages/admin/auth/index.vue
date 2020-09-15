<template>
  <section class="admin-login is-large">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-one-third">
          <div class="box">
            <b-field grouped>
              <b-field class="title" expanded>Log in</b-field>
              <div class="control">
                <b-button
                  v-show="isLogin"
                  type="is-info"
                  @click="isLogin = false"
                  >Sign up</b-button
                >
                <b-button
                  v-show="!isLogin"
                  type="is-primary"
                  @click="isLogin = true"
                  >Log in</b-button
                >
              </div>
            </b-field>
            <b-field label="Username">
              <b-input></b-input>
            </b-field>
            <b-field label="Email">
              <b-input type="email"> </b-input>
            </b-field>
            <b-field>
              <div class="control">
                <b-button v-show="isLogin" type="is-primary" expanded
                  >Log in</b-button
                >
                <b-button v-show="!isLogin" type="is-info" expanded
                  >Sign up</b-button
                >
              </div></b-field
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
    }
  },
  methods: {
    loginUser() {
      // Login the admin here
    },
    signupUser() {
      // Swap to signing up mode
    },
  },
  head() {
    return {
      title: 'Log in or create account',
    }
  },
}
</script>

<style lang="scss" scoped></style>

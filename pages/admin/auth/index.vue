<template>
  <section class="admin-login is-large">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-one-third">
          <div class="box">
            <b-field grouped>
              <b-field v-if="isLogin" class="title" expanded>Log in</b-field>
              <b-field v-else class="title" expanded>Sign up</b-field>
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
            <b-field label="Email">
              <b-input v-model.lazy="email" type="email"> </b-input>
            </b-field>
            <b-field label="Password">
              <b-input v-model.lazy="password" type="password"></b-input>
            </b-field>
            <b-field>
              <div class="control">
                <b-button
                  v-show="isLogin"
                  @click="authenticateUser"
                  type="is-primary"
                  expanded
                  >Log in</b-button
                >
                <b-button
                  v-show="!isLogin"
                  @click="authenticateUser"
                  type="is-info"
                  expanded
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
      email: '',
      password: '',
    }
  },
  methods: {
    authenticateUser() {
      let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:'
      this.isLogin
        ? (authUrl =
            authUrl + 'signInWithPassword?key=' + process.env.FIREBASE_API)
        : (authUrl = authUrl + 'signUp?key=' + process.env.FIREBASE_API)
      this.$axios
        .$post(authUrl, {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
        .then((res) => {
          console.log(res)
        })
        .catch((e) => console.log(e))
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

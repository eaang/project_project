<template>
  <section class="section admin-login">
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
              <b-input
                v-model.lazy="email"
                validation-message="Please enter a valid email."
                placeholder="Email"
                type="email"
                icon="envelope"
                icon-right="close-circle"
                icon-right-clickable
                @icon-right-click="clearIconClick"
              >
                >
              </b-input>
            </b-field>
            <b-field label="Password">
              <b-input
                v-model.lazy="password"
                type="password"
                icon="lock"
                placeholder="Password"
                password-reveal
                @keyup.native.enter="authenticateUser"
              >
              </b-input>
            </b-field>
            <b-field>
              <div class="control">
                <b-button
                  v-show="isLogin"
                  type="is-primary"
                  expanded
                  @click="authenticateUser"
                  >Log in</b-button
                >
                <b-button
                  v-show="!isLogin"
                  type="is-info"
                  expanded
                  @click="authenticateUser"
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
    clearIconClick() {
      this.email = ''
    },
    authenticateUser() {
      this.$store
        .dispatch('authenticateUser', {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/admin')
        })
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

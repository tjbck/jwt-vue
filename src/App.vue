<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/about">about</b-nav-item>
          <b-nav-item href="/login">login</b-nav-item>
          <b-nav-item href="/register">register</b-nav-item>
          <b-button size="sm" @click="removeToken">logout</b-button>

        </b-navbar-nav>
      </b-navbar>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    removeToken(){
      localStorage.removeItem('token')
    }
  }
};
</script>
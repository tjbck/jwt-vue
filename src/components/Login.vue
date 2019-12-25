<template>
  <div>
    <h1 class="display-4 text-center">Login</h1>
    <form @submit="login">
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" placeholder="Enter email" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password" v-model="password" />
      </div>

      <hr />
      <b-button block type="submit" pill variant="outline-secondary">Login</b-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function(e) {
      const userInfo = {
        email: this.email,
        password: this.password
      };

      fetch("http://localhost/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
      .then(res => res.json())
      .then(jsonData => localStorage.setItem('token',"Bearer " + jsonData['token']))
      .then(() => this.$router.push("/"))

      e.preventDefault()
    }
  },
  created() {
      if(localStorage.getItem("token")){
          this.$router.push("/about")
      }
  }
};
</script>

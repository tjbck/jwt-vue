<template>
  <div class="about">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "about",
  data: function() {
    return {
      token: "",
      msg: ""
    };
  },
  methods: {
    checkAuth: function() {
      this.token = localStorage.getItem("token");

      if (this.token == null) {
        this.$router.push("/login");
      } else {
        fetch("http://localhost/api/auth", {
          method: "POST",
          headers: {
            'authorization': this.token
          }
        })
          .then(res => res.json())
          .then(jsonRes => {
            console.log(jsonRes);
            this.msg = jsonRes;
          })
          .catch(err => this.msg = err)
      }
    }
  },
  created() {
    this.checkAuth();
  }
};
</script>
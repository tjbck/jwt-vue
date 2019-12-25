<template>
  <div>
    <h1 class="display-4 text-center">Register</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" placeholder="Enter email" v-model="email" required />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
          required
        />
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col">
            <label>First Name</label>
            <input type="text" class="form-control" v-model="firstname" placeholder="First name" />
          </div>
          <div class="col">
            <label>Last Name</label>
            <input type="text" class="form-control" v-model="lastname" placeholder="Last name" />
          </div>
        </div>
      </div>

      <div class="form-group">
        <label>Username</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">@</div>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Enter username"
            v-model="username"
            required
          />
        </div>
      </div>

      <hr />
      <b-button block type="submit" pill variant="outline-primary">Register</b-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "register",
  data: function() {
    return {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      username: ""
    };
  },
  methods: {
    register: function(e) {

      e.preventDefault();
    }
  }
};
</script>
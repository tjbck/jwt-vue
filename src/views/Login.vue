<template>
  <b-container class="h-100">
    <b-row class="h-100 justify-content-center align-items-center">
      <b-col cols="12">
        <Login />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
//   name: "home",
  components: {
    Login
  }
};
</script>
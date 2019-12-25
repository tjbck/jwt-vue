<template>
  <b-container class="h-100">
    <b-row class="h-100 justify-content-center align-items-center">
      <b-col cols="12">
        <Register />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Register from "@/components/Register.vue";

export default {
//   name: "home",
  components: {
    Register
  }
};
</script>
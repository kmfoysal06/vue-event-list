<template>
  <h1>Oops</h1>
  <h3>The {{ res }} youre looking for is not here.</h3>
  <router-link :to="{name:'event-list'}">Back To Home</router-link>
</template>
<script>
  export default {
    props: {
      res: {
        required: true,
        type: String,
        default:'page'
      },
    },
  };
</script>

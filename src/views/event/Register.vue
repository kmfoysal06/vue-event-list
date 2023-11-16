<template>
  <p>Register The Event Here</p>
  <button @click="register">Register Me</button>
  </template>
<script>
export default{
  props:['event'],
  inject:['Gstore'],
  methods:{
    register(){
      //call to api
      //if registered redirect user to event details
      this.Gstore.flashMessage = 'You are successfully Registered for '+this.event.title
      setTimeout(() => {
        this.Gstore.flashMessage = ''
      }, 3000);
      this.$router.replace({
        name:'event-details',
      })
    }
  }
}
</script>
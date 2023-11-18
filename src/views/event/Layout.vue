<template>
  <div v-if="Gstore.event">
    <h3>
      {{ Gstore.event.title }}
    </h3>
    <div class="event-actions" v-if="Gstore.event">
      <router-link :to="{ name: 'event-details' }">Details</router-link>
      <router-link :to="{ name: 'event-register' }">Register</router-link>
      <router-link :to="{ name: 'event-edit' }">Edit</router-link>
    </div>
    <router-view :event="Gstore.event" />
  </div>
</template>
<script>
import Gstore from '@/store'
export default {
inject : ['Gstore']
};
</script>
<style>
.event-actions a{
    color:#000;
    text-decoration: none;
    padding: 5px;
    margin: 0 5px;
    border: 1px solid;
    margin-bottom: 30px;
}
</style>

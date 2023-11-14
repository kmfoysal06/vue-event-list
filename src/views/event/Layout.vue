<template>
  <div v-if="event">
    <h3>
      {{ event.title }}
    </h3>
    <div class="event-actions" v-if="event">
      <router-link :to="{ name: 'event-details' }">Details</router-link>
      <router-link :to="{ name: 'event-register' }">Register</router-link>
      <router-link :to="{ name: 'event-edit' }">Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>
<script>
import Request from "@/services/EventService.js";
export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    Request.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
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

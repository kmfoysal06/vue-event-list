<template>
  <h1>Events for you</h1>
  <div class="events">
    <div class="home" v-for="event in events" :key="event.id">
      <EventCard :event="event" />
    </div>
  </div>
  <div class="pagination">
    <router-link
    id="prev"
    :to="{ name: 'event-list', query: { page: page - 1 } }"
    rel="prev"
    v-if="page !== 1"
    >&#60 Prev Page</router-link
  >
  <router-link
    id="next"
    :to="{ name: 'event-list', query: { page: page + 1 } }"
    rel="next"
    v-if="hasNextPage"
    >Next Page &#62</router-link
  >
  </div>
  
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import Request from "@/services/EventService.js";
import {watchEffect} from 'vue'

export default {
  name: "HomeView",
  props: ["page"],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      totalEvents:0
    };
  },
  created() {
    watchEffect(()=>{
      this.events = null
      Request.getEvents(2, this.page)
      .then((response) => {
        this.events = response.data;
        this.totalEvents = response.headers['x-total-count']
      })
      .catch((error) => {
        console.error(error);
      })
    })
  },
  computed : {
    hasNextPage(){
      let totalPages = Math.ceil(this.totalEvents/2)
      return this.page < totalPages
    }
  }
}
</script>
<style>
div.pagination a{
  text-decoration: none;
  color: #000;
  padding: 5px;
  margin: 5px;
  border: 1px solid;
}
div.pagination{
  margin-top: 20px;
}
</style>
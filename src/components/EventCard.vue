<template>
  <router-link :to="{ name: 'event-layout', params: { id: event.id } }">
    <div class="event">
      <h2>{{ event.title }}</h2>
      <span>@ {{ event.time }} on {{ event.date }}</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.event {
  padding: 10px;
  border: 1px solid #000;
  width: 500px;
  cursor: pointer;
  transition: 100ms;
  color:#000;
  text-decoration: none;
}
.event:hover {
  scale: 1.05;
}
.events {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.events a {
  text-decoration: none;
}
</style>

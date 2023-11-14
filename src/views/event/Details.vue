<template>
<div class="info">
  <span>{{ event.time }} on {{ event.date }} @{{ event.location }}</span>
  <p>{{ event.description }}</p>
</div>
</template>
<script>
export default{
  props:['event']
}
</script>
<style>
.info{
  margin-top: 20px;
}
</style>
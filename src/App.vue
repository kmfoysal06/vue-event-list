<template>
  <div id="flashMessage" v-if="Gstore.flashMessage">
    {{  Gstore.flashMessage  }}
  </div>
  <nav>
    <router-link :to="{ name: 'event-list' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
  </nav>
  <router-view />
</template>
<script>
export default{
  inject : ['Gstore']
}
</script>
<style>
#flashMessage{
  animation: fade 3s linear 1;
  width:100px;
  padding:10px;
  position: absolute;
  top: 0;
  right: 0;
}
@keyframes fade{
  0%{
    background-color: #3c00ea;
  }
  98%{
    transform: translateY(10px);
  }
  100%{
    background-color: transparent;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

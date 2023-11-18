import { createApp  } from 'vue'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
import Gstore from './store'



createApp(App).use(router).provide('Gstore',Gstore).mount('#app')

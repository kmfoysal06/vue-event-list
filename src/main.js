import { createApp ,reactive } from 'vue'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'


const Gstore = reactive({flashMessage:''})

createApp(App).use(router).provide('Gstore',Gstore).mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
console.log("打印环境变量", import.meta.env.VITE_NODE_ENV)

createApp(App).mount('#app')

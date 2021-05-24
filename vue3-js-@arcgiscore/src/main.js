import { createApp } from 'vue'
import App from './App.vue'
import esriConfig from "@arcgis/core/config.js"
import './main.css'

esriConfig.assetsPath = "./assets"
createApp(App).mount('#app')

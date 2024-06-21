import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import VueApexCharts from "vue3-apexcharts";


import './assets/styles/tailwind.css'
import './assets/styles/font.css'
createApp(App).use(router).use(VueApexCharts).mount('#app')

import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.locale('zh-cn')
dayjs.extend(isoWeek);

createApp(App).use(router).mount('#app')

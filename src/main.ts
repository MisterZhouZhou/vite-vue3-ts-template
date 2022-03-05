import { createApp } from 'vue'
import router from '@/router'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import { Button, Loading, Empty } from 'vant'

const app = createApp(App)

// 全局引入组件库
app.use(Button).use(Loading).use(Empty)

// 使用状态管理
app.use(createPinia())

// 使用路由模块
app.use(router)

app.mount('#app')

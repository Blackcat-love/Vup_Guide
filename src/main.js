// main.ts
import { createApp, defineComponent } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import { createRouter, createWebHistory } from 'vue-router' // 导入 createRouter 和 createWebHistory
import App from './App.vue'
import 'element-plus/dist/index.css'

// 路由跳转页面定义
import vuphelp from './components/vuphelp.vue'
import documentationVue from './components/documentation.vue'
import body from './components/body.vue'
import statementVue from './components/statement.vue'



const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 在这里定义你的路由规则
    { path: '/documentation', component: documentationVue },
    {path: '/vuphelp', component: vuphelp },
    {path: '/vupbody', component: body },
    {path: '/stateme',component: statementVue}
  ],
})

app.use(router) // 将路由实例添加到应用程序中

app.mount('#app')
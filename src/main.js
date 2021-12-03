import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 注册全局组件插件
import CopPlugins from '@/components'
// 重置浏览器默认样式
import 'normalize.css'
// 引入公共样式
import './styles/common.less'
createApp(App).use(store).use(router).use(CopPlugins).mount('#app')


// 注册全局组件
import Skeleton from './Skeleton'
// 轮播图
import Slider from './Slider'
// more更多
import More from './More'
// 面包屑
import Bread from './Bread/index.vue'
import BreadItems from './Bread/item.vue'
const cpp = [Skeleton, Slider, More, Bread, BreadItems]
export default {
  install (app) {
    cpp.forEach(cp => {
      app.component(cp.name, cp)
    })
  }
}

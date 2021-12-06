
// 注册全局组件
import Skeleton from './Skeleton'
// 轮播图
import Slider from './Slider'
// more更多
import More from './More'
// 面包屑
import Bread from './Bread/index.vue'
import BreadItems from './Bread/item.vue'
// 城市
import City from './City'
// sku
import Sku from './Sku/index.vue'
const cpp = [Skeleton, Slider, More, Bread, BreadItems, City, Sku]
export default {
  install (app) {
    cpp.forEach(cp => {
      app.component(cp.name, cp)
    })
  }
}

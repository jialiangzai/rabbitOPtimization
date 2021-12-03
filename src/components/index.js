
// 注册全局组件
import Skeleton from './Skeleton'
// 轮播图
import Slider from './Slider'
// more更多
import More from './More'
const cpp = [Skeleton, Slider, More]
export default {
  install (app) {
    cpp.forEach(cp => {
      app.component(cp.name, cp)
    })
  }
}

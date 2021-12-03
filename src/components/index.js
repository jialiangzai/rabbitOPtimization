
// 注册全局组件
import Skeleton from './Skeleton'
// 轮播图
import Slider from './Slider'
const cpp = [Skeleton, Slider]
export default {
  install (app) {
    cpp.forEach(cp => {
      app.component(cp.name, cp)
    })
  }
}

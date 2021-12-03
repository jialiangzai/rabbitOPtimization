
// 注册全局组件
import Skeleton from './Skeleton'
const cpp = [Skeleton]
export default {
  install (app) {
    cpp.forEach(cp => {
      app.component(cp.name, cp)
    })
  }
}

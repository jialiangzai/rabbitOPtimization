
import { useIntersectionObserver } from '@vueuse/core'
// 默认图片
import defaIMg from '@/assets/images/load.gif'
// 图片懒加载指令
export default {
  // 需要拿到main.js中由createApp方法产出的app实例对象
  install (app) {
    // 指令的名字  带参数用binding
    app.directive('imglazy', {
      mounted (img, binding) {
        const { stop } = useIntersectionObserver(img,
          // 注意第二个参数是目标元素，img是ref对象是容器
          ([{ isIntersecting }], imgs) => {
            // 显示默认加载loading
            img.src = defaIMg
            if (isIntersecting) {
              // console.log('图片进入了可视区域', isIntersecting)
              // 之前是掉接口发请求
              // 加载图片(实际开发不可以用延时器)
              setTimeout(() => {
                img.src = binding.value
              }, 2000)
              // 如果图片异常
              img.onerror = () => {
                img.src = defaIMg
              }
              // 停止监听元素
              stop()
            }
          },
          {
            threshold: 0 // 进入后立马触发
          })
      }
    })
  }
}

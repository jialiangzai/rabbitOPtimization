
// 可复用的逻辑
// 实现组件的懒加载
// 组件懒加载
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
export function useObserver (ajaxFn) {
  // 监听的元素
  const target = ref(null)
  // 每次被监听的dom进入移出视口时都会触发一次，而不是只触发一次
  // target表示观察的目标dom容器，必须是dom容器，而且是vue3.0方式绑定的dom对象
  const { stop } = useIntersectionObserver(target,
    // ele被监听的对象
    ([{ isIntersecting }, ele]) => {
      console.log('组价进入了视口', isIntersecting)
      if (isIntersecting) {
        // 进入一次之后就停止监听元素
        stop()
        // 唯一不同的调用接口
        ajaxFn()
      }
    },
    {
      // 进入当前元素可视区域的比例是多少才执行回调 0-1 值越大 代表需要进入的面积越大
      threshold: 0
    })
  // 一定要返回监听的元素
  return { target }
}

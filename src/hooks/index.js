
// 可复用的逻辑
// 实现组件的懒加载
// 组件懒加载
import { useIntersectionObserver, useIntervalFn } from '@vueuse/core'
import { ref, onUnmounted, computed } from 'vue'
import dayjs from 'dayjs'
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
// 倒计时
// time要转换的时间单位是秒 Unix 时间戳 (秒)

export function useCountDown (time) {
  // 时间
  const countTime = ref(0)
  const countTimeText = computed(() => {
    return dayjs.unix(countTime.value).format('mm分ss秒')
  })
  const { pause, resume } = useIntervalFn(() => {
    /* your function */
    // 自减逻辑
    countTime.value--
    // 到零停止
    if (countTime.value <= 0) {
      pause()
    }
  }, 1000, { immediate: false })
  // 开始
  function start (tm) {
    if (countTime.value === 0) {
      countTime.value = time || tm
    }
    resume()
  }
  // 清理一下定时器
  // 组件的卸载之后
  onUnmounted(() => {
    pause()
  })
  return { countTime, start, pause, countTimeText }
}

<template>
  <div class="app-header-sticky" :class="{ show: y > 100 }">
    <!-- 吸顶组件 -->
    <div class="container">
      <!-- 首页logo -->
      <RouterLink class="logo" to="/" />
      <!-- 复用了头部导航组件 -->
      <HeaderNav />
      <!-- 右侧自定义新增的两个导航项 -->
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from './header-nav'
// import { ref } from 'vue'
// 第三方vueuse钩子
import { useWindowScroll } from '@vueuse/core'
export default {
  name: 'AppHeaderSticky',
  components: { HeaderNav },
  // v2实现
  // 准备一个类名，控制样式让其固定在顶部
  // data () {
  //   return {
  //     isShow: false
  //   }
  // },
  // 页面挂载完毕根据页面滚动事件获取滚动的高度去判断满足条件动态添加修改样式
  // created () {
  //   window.onscroll = () => {
  //     // 获取滚动高度
  //     const scrollHights = document.documentElement.scrollTop
  //     if (scrollHights > 100) {
  //       this.isShow = true
  //     } else {
  //       this.isShow = false
  //     }
  //   }
  // }
  // vue3写法
  setup () {
    // const isShow = ref(false)
    // window.onscroll = () => {
    //   const scrollHights = document.documentElement.scrollTop
    //   if (scrollHights > 100) {
    //     isShow.value = true
    //   } else {
    //     isShow.value = false
    //   }
    // }
    const { y } = useWindowScroll()
    // return { isShow }
    return { y }
  }
}

</script>

<style scoped lang='less'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // ======== 此处为新增样式！！！！！！======
  // 默认情况下完全把自己移动到上面=> 不显示
  transform: translateY(-100%);
  // 完全透明
  opacity: 0;
  // 显示出来的类名
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  // end
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url("~@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>

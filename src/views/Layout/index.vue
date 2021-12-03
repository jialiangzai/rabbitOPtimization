<template>
  <!-- 头部通栏 -->
  <TopNav />
  <!-- 头部导航栏 -->
  <XtxHeader />
  <!-- 吸顶组件 -->
  <XtxHeaderSticky />
  <main>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </main>
  <!-- 底部 -->
  <XtxFooter />
</template>

<script>
// 头部通栏
import TopNav from './components/topnav'
// 头部导航栏
import XtxHeader from './components/header.vue'
// 底部
import XtxFooter from './components/footer.vue'
// 吸顶组件
import XtxHeaderSticky from './components/header-sticky.vue'
// 在根组件中发请求尽管复用后代组件不会重复发送请求
import { useStore } from 'vuex'
import { onMounted } from 'vue'
export default {
  name: 'xtx-layout',
  components: {
    TopNav,
    XtxHeader,
    XtxFooter,
    XtxHeaderSticky
  },
  setup () {
    const store = useStore()
    onMounted(() => {
      store.dispatch('category/getList')
    })
  }

}
</script>

<style scoped lang='less'></style>

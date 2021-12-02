<template>
  <!-- 头部通栏 -->
  <TopNav />
  <!-- 头部导航栏 -->
  <XtxHeader />
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
export default {
  name: 'xtx-layout',
  components: {
    TopNav,
    XtxHeader,
    XtxFooter
  }
}
</script>

<style scoped lang='less'></style>

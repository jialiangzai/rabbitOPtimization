<template>
  <!-- 头部通栏 -->
  <TopNav />
  <!-- 头部导航栏 -->
  <XtxHeader/>
  <main>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script>
// 头部通栏
import TopNav from './components/topnav'
// 头部导航栏
import XtxHeader from './components/header.vue'
export default {
  name: 'xtx-layout',
  components: {
    TopNav,
    XtxHeader
  }
}
</script>

<style scoped lang='less'></style>

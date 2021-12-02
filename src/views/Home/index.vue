<template>
  <div class="container">
    <!-- 首页左侧菜单栏 -->
    <HomeCategory />
    <!-- 右侧轮播图 -->
    <HomeBanner />
  </div>
  <!-- <button @click="$store.dispatch('category/getList')">获取列表</button> -->
</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
export default {
  name: 'xtx-home-page',
  components: {
    HomeCategory,
    HomeBanner
  },
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
// @import "~@/styles/variables.less";
.box {
  color: @xtxColor;
}
</style>

<template>
  <div class="container">
    <!-- 首页左侧菜单栏 -->
    <HomeCategory />
    <!-- 右侧轮播图 -->
    <HomeBanner />
    <!-- 新鲜好物 -->
    <HomeNew />
  </div>
  <!-- <button @click="$store.dispatch('category/getList')">获取列表</button> -->
</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
// 新鲜好物
import HomeNew from './components/home-new.vue'
export default {
  name: 'xtx-home-page',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew
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

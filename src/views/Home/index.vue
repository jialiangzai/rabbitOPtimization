<template>
  <div class="container">
    <!-- 首页左侧菜单栏 -->
    <HomeCategory />
    <!-- 右侧轮播图 -->
    <HomeBanner />
    <!-- 新鲜好物 -->
    <HomeNew />
    <!-- 人气推荐 -->
    <HomeHot />
    <!-- 楼层组件 -->
    <HomeProduct />
  </div>
  <!-- <button @click="$store.dispatch('category/getList')">获取列表</button> -->
</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
// 新鲜好物
import HomeNew from './components/home-new.vue'
// 人气推荐
import HomeHot from './components/home-hot.vue'
// 楼层
import HomeProduct from './components/home-product.vue'
export default {
  name: 'xtx-home-page',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeProduct
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

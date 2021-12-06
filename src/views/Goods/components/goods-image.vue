<template>
  <div class="goods-image">
    <div class="middle">
      <!-- 目前写死了显示第一个 -->
      <img :src="imgs[currentIndex]" alt="" />
    </div>
    <ul class="small">
      <li v-for="(img, i) in imgs" :key="i" @mouseenter="currentIndex = i">
        <img :src="img" alt="" />
      </li>
    </ul>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'GoodsImage',
  props: {
    imgs: {
      type: Array,
      default: () => []
    }
  }, /**
   * 实现鼠标进入右侧列表左侧显示不同大图片
   * 因为imgs是一个数组元素是地址，只要根据下标更改不同的元素显示不同图片
   */
  setup () {
    const currentIndex = ref(0)
    return {
      currentIndex
    }
  }
}
</script>
<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid @xtxColor;
      }
    }
  }
}
</style>

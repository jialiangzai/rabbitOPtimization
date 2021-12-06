<template>
  <div class="goods-image">
    <!-- 放大镜效果盒子 -->
    <div
      class="large"
      :style="[{ backgroundImage: `url(${imgs[currentIndex]})` }]"
    ></div>
    <div class="middle">
      <!-- 目前写死了显示第一个 -->
      <img :src="imgs[currentIndex]" alt="" />
      <!-- 蒙层容器 -->
      <div class="layer"></div>
    </div>
    <!-- 图片列表 -->
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
  /**
   * 放大镜 难点
   * 1. 准备蒙层
   * 2. 鼠标在左侧预览盒子内移动蒙层以中心点-----鼠标的移动距离和坐标
   * 3. 放大镜区域随着蒙层移动实现移动----backgroundposition
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
// 放大镜
.large {
  position: absolute;
  top: 0;
  left: 412px;
  width: 400px;
  height: 400px;
  z-index: 500;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-size: 800px 800px;
  background-color: #f8f8f8;
}
// 蒙层
.layer {
  width: 200px;
  height: 200px;
  background: rgba(0, 0, 0, 0.2);
  left: 0;
  top: 0;
  position: absolute;
}
</style>

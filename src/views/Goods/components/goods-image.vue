<template>
  <!-- <p>x:{{ elementX }} y:{{ elementY }} 是否在外面:{{ isOutside }}</p> -->

  <div class="goods-image">
    <!-- 放大镜效果盒子 -->
    <div
      v-show="!isOutside"
      class="large"
      :style="[
        { backgroundImage: `url(${imgs[currentIndex]})` },
        { backgroundPosition: `${bg.x}px ${bg.y}px` },
      ]"
    ></div>
    <div class="middle" ref="target">
      <!-- 目前写死了显示第一个 -->
      <img :src="imgs[currentIndex]" alt="" />
      <!-- 蒙层容器 -->
      <div
        v-show="!isOutside"
        class="layer"
        :style="{ left: `${pos.left}px`, top: `${pos.top}px` }"
      ></div>
      <!-- <p>{{ pos }}</p> -->
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
import { ref, watch, reactive } from 'vue'
import { useMouseInElement } from '@vueuse/core'
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
   * 2. 鼠标在左侧预览盒子内移动蒙层以中心点-----鼠标的移动距离和坐标 控制定位的left和top
   * 3. 放大镜区域随着蒙层移动实现移动----backgroundposition
   */
  setup () {
    // 放大镜
    const bg = reactive({ x: 0, y: 0 })
    // 蒙层的位置
    const pos = ref({ left: 0, top: 0 })
    const currentIndex = ref(0)
    // middle盒子
    const target = ref(null)
    // elementX 鼠标基于容器左上角X轴偏移
    // elementY 鼠标基于容器左上角Y轴偏移
    // isOutside 鼠标是否在模板容器外
    const { elementX, elementY, isOutside } = useMouseInElement(target)
    // 监听鼠标坐标移动蒙层
    watch([elementX, elementY, isOutside], () => {
      /**
       * 浏览器默认的坐标系是以左上角为原点
       * 大盒子400 蒙层200
       * 可移动不超出距离为 正常0-200
       * 可移动可超出     element宽度-蒙层1/2 最大300 最小 蒙层的1/2  100    100-300
       * 扩展offset 去除大盒子的外边距
       */
      // x轴 ======>left
      if (elementX.value < 100) {
        // 左侧超出
        pos.value.left = 0
      } else if (elementX.value > 300) {
        // element坐.value标-蒙层1/2
        pos.value.left = 200
      } else {
        pos.value.left = elementX.value - 100
      }
      // y轴 ======>top
      if (elementY.value < 100) {
        // 左侧超出
        pos.value.top = 0
      } else if (elementY.value > 300) {
        // element坐.value标-蒙层1/2
        pos.value.top = 200
      } else {
        pos.value.top = elementY.value - 100
      }
      // 大图和小图比例为2:1 像素比2 ，并不是bgsize那是控制背景图片大小 我们要做的是改变它的位置
      // 精灵图技术取负数
      bg.x = -pos.value.left * 2
      bg.y = -pos.value.top * 2
    })
    return {
      currentIndex,
      target,
      elementX,
      elementY,
      isOutside,
      pos,
      bg
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

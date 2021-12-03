<template>
  <home-panel title="人气推荐" subTitle="人气爆款 不容错过" ref="hot">
    <template #right>
      <!-- 使用了更多组件 -->
      <xtx-more></xtx-more>
    </template>
    <ul class="goods-list">
      <li v-for="item in list" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" :alt="item.alt" />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </home-panel>
</template>

<script>
import homePanel from './home-panel.vue'
import { findHot } from '@/api/home'
import { ref } from 'vue'
// 组件懒加载
import { useIntersectionObserver } from '@vueuse/core'
export default {
  name: 'HomeHot',
  components: { homePanel },
  setup () {
    const list = ref([])
    // 监听的元素
    const hot = ref(null)
    // 每次被监听的dom进入移出视口时都会触发一次，而不是只触发一次
    const { stop } = useIntersectionObserver(hot,
      ([{ isIntersecting }, ele]) => {
        console.log('组价进入了视口', isIntersecting)
        if (isIntersecting) {
          // 进入一次之后就停止监听元素
          stop()
          getListHot()
        }
      })
    const getListHot = async () => {
      const { result } = await findHot()
      console.log('人气推荐', result)
      list.value = result
    }
    return { list, getListHot, hot }
  }
}
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    // 激活效果
    transition: all 0.5s;
    &:hover {
      transform: translate3d(0, -6px, 0);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }
    // end
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .price {
      color: @priceColor;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>

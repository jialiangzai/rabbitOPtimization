<template>
  <home-panel title="人气推荐" subTitle="人气爆款 不容错过" ref="target">
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
import { useObserver } from '@/hooks'
export default {
  name: 'HomeHot',
  components: { homePanel },
  setup () {
    const list = ref([])

    const getListHot = async () => {
      const { result } = await findHot()
      console.log('人气推荐', result)
      list.value = result
    }
    // 懒加载
    const { target } = useObserver(getListHot)
    return { list, getListHot, target }
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

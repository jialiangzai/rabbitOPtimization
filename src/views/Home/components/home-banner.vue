<template>
  <div class="home-banner">
    <XtxSlider :data="list" autoPlay />
  </div>
</template>

<script>
import { findBanner } from '@/api/home'
import { ref } from 'vue'
export default {
  name: 'HomeBanner',
  setup () {
    const list = ref([])
    const getListBanner = async () => {
      const { result } = await findBanner()
      console.log('轮播图数据', result)
      list.value = result
    }
    getListBanner()
    return { list, getListBanner }
  }
}
</script>

<style scoped lang='less'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
</style>

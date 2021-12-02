<template>
  <div class="box">首页</div>
  <!-- <button @click="$store.dispatch('category/getList')">获取列表</button> -->
</template>

<script>
export default {
  name: 'xtx-home-page',
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

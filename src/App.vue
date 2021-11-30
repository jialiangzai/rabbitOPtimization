<template>
  <router-view />
  <!-- <p>{{ $store.state.user.profile }}</p>
  <button @click="$store.commit('user/updateName', 'tokem000000')">
    测试第三方插件实现vuex持久化
  </button> -->
</template>
<script>
// 测试二次封装import request from '@/utils/request.js'
export default {
  setup () {
    // request('/home/banner', 'get').then(res => console.log(res))
    return {}
  }
}
</script>
<style lang="less">
</style>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <!-- 登录状态 -->
        <template v-if="token">
          <li>
            <a href="javascript:;"><i class="iconfont icon-user"></i>赛罗</a>
          </li>
          <li><a href="javascript:;">退出登录</a></li>
        </template>
        <!-- 未登录状态 v-else必须写-->
        <template v-else>
          <li><a href="javascript:;">请先登录</a></li>
          <li><a href="javascript:;">免费注册</a></li>
        </template>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li>
          <a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// vuex中token判断是否登录
import { useStore } from 'vuex'
import { ref } from 'vue'
export default {
  name: 'AppTopnav',
  setup () {
    // 获取store实例
    const store = useStore()
    // 变量
    const userId = ref('')
    const { token } = store.state.user.profile
    return { token, userId }
  }
}
</script>

<style lang="less" scoped>
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>

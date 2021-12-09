<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <!-- 登录状态 -->
        <template v-if="token">
          <li>
            <a href="javascript:;"><i class="iconfont icon-user"></i>赛罗</a>
          </li>
          <li><a href="javascript:;" @click="logOut">退出登录</a></li>
        </template>
        <!-- 未登录状态 v-else必须写-->
        <template v-else>
          <li>
            <!-- <a href="javascript:;" @click="$router.replace('/login')">
              请先登录
            </a> -->
            <RouterLink to="/login">请先登录</RouterLink>
          </li>
          <li><a href="javascript:;">免费注册</a></li>
        </template>
        <li><router-link to="/order/list">我的订单</router-link></li>
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
import { useRouter } from 'vue-router'
export default {
  name: 'AppTopnav',
  setup () {
    // 获取store实例
    const store = useStore()
    const router = useRouter()
    // 变量
    const userId = ref('')
    const { token } = store.state.user.profile
    // 退出
    const logOut = () => {
      store.dispatch('user/logOut')
      router.replace('/login')
    }
    return { token, userId, logOut }
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

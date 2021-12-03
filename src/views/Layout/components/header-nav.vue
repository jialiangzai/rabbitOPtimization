<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <!-- 有数据的时候 -->
    <template v-if="list.length">
      <li v-for="v in list" :key="v.id">
        <a href="#">{{ v.name }}</a>
        <!-- hover效果 end -->
        <div class="layer">
          <ul>
            <li v-for="sce in v.children" :key="sce.id">
              <a href="javascript:;">
                <!-- 图片 -->
                <img :src="sce.picture" :alt="sce.name" />
                <!-- 文字 -->
                <p>{{ sce.name }}</p>
              </a>
            </li>
          </ul>
        </div>
        <!-- hover 显示 end -->
      </li>
    </template>
    <!-- 无数据时候骨架屏 -->
    <template v-else>
      <li v-for="vs in 9" :key="vs">
        <XtxSkeleton
          :width="24"
          :height="20"
          style="margin-right: 10px"
          bg="#ccc"
        />
      </li>
    </template>
    <!-- <li><a href="#">餐厨</a></li>
    <li><a href="#">艺术</a></li>
    <li><a href="#">电器</a></li>
    <li><a href="#">居家</a></li>
    <li><a href="#">洗护</a></li>
    <li><a href="#">孕婴</a></li>
    <li><a href="#">服装</a></li>
    <li><a href="#">杂货</a></li> -->
  </ul>
</template>

<script>
// 一级分类鼠标hover的时候，会展示二级分类列表
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'AppHeaderNav',
  setup () {
    // 存储数据列表
    const store = useStore()
    // 组件实例创建后 复用会触发两次请求
    // onMounted(() => {
    //   store.dispatch('category/getList')
    // })
    const list = computed(() => {
      return store.state.category.list
    })
    return { list }
  }
}
</script>

<style lang="less" scoped>
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    > a.router-link-exact-active {
      color: @xtxColor;
      border-bottom: 1px solid @xtxColor;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
    // 初始样式 不显示
    .layer {
      width: 1240px;
      background-color: #fff;
      position: absolute;
      left: -200px;
      top: 56px;
      height: 0;
      overflow: hidden;
      opacity: 0;
      box-shadow: 0 0 5px #ccc;
      // 过渡
      transition: all 0.2s 0.1s;
      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 70px;
        align-items: center;
        height: 124px;
        li {
          width: 110px;
          text-align: center;
          img {
            width: 60px;
            height: 60px;
          }
          p {
            padding-top: 10px;
          }
          &:hover {
            p {
              color: @xtxColor;
            }
          }
        }
      }
    }
    // hover之后显示出来
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      > .layer {
        // 透明度和高度
        height: 120px;
        opacity: 1;
      }
    }
    // end
  }
}
</style>

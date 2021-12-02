<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <li>
      <a href="#">美食 </a>
      <!-- hover效果 end -->
      <div class="layer">
        <ul>
          <li v-for="v in 9" :key="v">
            <a href="javascript:;">
              <!-- 图片 -->
              <img
                src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(4).png"
                alt=""
              />
              <!-- 文字 -->
              <p>果干</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- hover 显示 end -->
    </li>
    <li><a href="#">餐厨</a></li>
    <li><a href="#">艺术</a></li>
    <li><a href="#">电器</a></li>
    <li><a href="#">居家</a></li>
    <li><a href="#">洗护</a></li>
    <li><a href="#">孕婴</a></li>
    <li><a href="#">服装</a></li>
    <li><a href="#">杂货</a></li>
  </ul>
</template>

<script>
// 一级分类鼠标hover的时候，会展示二级分类列表
export default {
  name: 'AppHeaderNav'
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

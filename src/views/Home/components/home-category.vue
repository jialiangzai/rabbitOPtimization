<template>
  <div class="home-category">
    <ul class="menu">
      <!-- 有数据时一级 -->
      <template v-if="secons.length">
        <li
          v-for="item in secons"
          :key="item.id"
          @mouseenter="cateId = item.id"
        >
          <RouterLink to="/">{{ item.name }}</RouterLink>
          <!--在vue3里面template 只有俩种情况使用
        1. 根据某个状态渲染多个模板的，当做空标签使用  v-if v-else
        2. 插槽的场景    <tempalte #default></template>  <tempalte #footer></template>-->
          <!-- 二级 -->
          <template v-if="item.children">
            <RouterLink v-for="sub in item.children" :key="sub.id" to="/">
              {{ sub.name }}
            </RouterLink>
          </template>
        </li>
      </template>
      <!-- 无数据时的骨架屏 -->
      <template v-else>
        <li v-for="nums in 9" :key="nums">
          <!-- 一级 -->
          <XtxSkeleton
            :width="40"
            :height="20"
            style="margin-right: 10px"
            bg="rgba(255,255,255,0.2)"
          />
          <!-- 二级 -->
          <XtxSkeleton
            :width="50"
            :height="20"
            style="margin-right: 5px"
            bg="rgba(255,255,255,0.2)"
          />
          <XtxSkeleton
            :width="50"
            :height="20"
            style="margin-right: 5px"
            bg="rgba(255,255,255,0.2)"
          />
        </li>
      </template>
    </ul>
    <!-- 弹层 -->
    <!-- 进行处理如果左侧菜单分类没有goods不显示因为和上面的组件不同所以不可item -->
    <template v-if="cateGoods && cateGoods.goods">
      <div class="layer">
        <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
        <ul>
          <li v-for="i in cateGoods.goods" :key="i.id">
            <!-- 跳转详情页 -->
            <RouterLink :to="`/goods/${i.id}`">
              <img :src="i.picture" alt="" />
              <div class="info">
                <p class="name ellipsis-2">{{ i.name }}</p>
                <p class="desc ellipsis">{{ i.desc }}</p>
                <p class="price"><i>¥</i>{{ i.price }}</p>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
export default {
  name: 'HomeCategory',
  setup () {
    const store = useStore()
    // 定义鼠标进入事件的id
    const cateId = ref(null) // ''也可以接口是字符串
    // 因为首页在头部组件中已经发送请求并存储到vuex中且是响应式的数据
    // const list = computed(() => {
    //   return store.state.category.list
    // })
    // 处理二级列表前两个数据渲染左侧分类
    const secons = computed(() => {
      // 思路 遍历数组映射所需----》数组的截取
      return store.state.category.list.map(item => {
        return {
          id: item.id,
          name: item.name,
          children: item.children.slice(0, 2)
        }
      })
    })
    // 计算属性此时可以拿到id去数组进行查找goods属性值----性能用find
    const cateGoods = computed(() => {
      // 因为是异步数据响应慢页面还没拿到就会报错用可选链
      // 还有另一种方式
      return store.state.category.list.find(item => item.id === cateId.value)
      // return store.state.category.list.find(item => item.id === cateId.value)?.goods
    })
    return { secons, cateId, cateGoods }
  }
}
</script>

<style scoped lang='less'>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;
      &:hover {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
  // 弹层默认不显示
  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #e3f9f4;
          }
          img {
            width: 95px;
            height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
            overflow: hidden;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: @priceColor;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  // 显示弹层
  &:hover {
    .layer {
      display: block;
    }
  }
}
</style>

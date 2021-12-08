<template>
  <div class="xtx-goods-page" v-if="goods.categories">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread separator="/">
        <!-- 首页固定 -->
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <!-- 一级面包屑 -->
        <XtxBreadItem to="/">{{ goods.categories[1].name }}</XtxBreadItem>
        <!-- 二级导航 -->
        <XtxBreadItem to="/">{{ goods.categories[0].name }}</XtxBreadItem>
        <!-- 自身 -->
        <XtxBreadItem to="/">{{ goods.name }}</XtxBreadItem>
      </XtxBread>
      <!-- 商品信息 -->
      <div class="goods-info">
        <!-- 新增结构 -->
        <!-- 图片预览区 -->
        <div class="media">
          <GoodsImage :imgs="goods.mainPictures" />
          <!-- 信息 -->
          <GoodsSales />
        </div>
        <!-- 商品信息区 -->
        <div class="spec">
          <GoodsName />
          <!-- 新增 sku -->
          <GoodsSku :goods="goods" @change="getSku" />
          <!-- 控制数量组件 -->
          <!-- <Numbox :max="goods.inventory" :min="1" v-model="numP" /> -->
          <Numbox
            :max="goods.inventory"
            :min="1"
            :modelValue="numP"
            @update:modelValue="numP = $event"
          />
          <!-- 加入购物车 -->
          <Buttons
            type="large"
            bg="primary"
            style="margin-top: 10px"
            @click="addCart"
            >加入购物车</Buttons
          >
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <div class="goods-tabs">
            <!-- 详情图片列表 -->
            <img
              v-for="(imgs, i) in goods.details.pictures"
              :key="i"
              v-imglazy="imgs"
            />
          </div>
        </div>
        <div class="goods-aside">
          <h3 class="top">24小时热榜</h3>
          <div class="hotbor">
            <ul>
              <li v-for="(hot, i) in goods.hotByDay" :key="i">
                <div class="goods-item">
                  <RouterLink :to="`/goods/${hot.id}`" class="image">
                    <img v-imglazy="hot.picture" alt="" />
                  </RouterLink>
                  <p class="name ellipsis">{{ hot.name }}</p>
                  <p class="desc">{{ hot.desc }}</p>
                  <p class="price">&yen;{{ hot.price }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 1. 定义获取商品详情API函数
// 2. 在组件setup中获取商品详情数据
import { findGoods } from '@/api/goods'
import { useRoute } from 'vue-router'
import { ref, provide, reactive } from 'vue'
// 左侧图片预览
import GoodsImage from './components/goods-image.vue'
import GoodsSales from './components/goods-sales'
import GoodsName from './components/goods-name'
// 数量组件
import Numbox from '@/components/Numbox'
// 加入购物车
import Buttons from '@/components/Button'
// message
import msg from '@/components/Message'
import { useStore } from 'vuex'
export default {
  name: 'XtxGoodsPage',
  components: {
    GoodsImage,
    GoodsSales,
    GoodsName,
    Numbox,
    Buttons
  },
  setup () {
    const store = useStore()
    // 数量
    const numP = ref(2)
    const goods = ref({})
    // 路由参数实例
    const route = useRoute()
    const getList = async () => {
      const { result } = await findGoods(route.params.id)
      console.log('商品详情数据', result)
      goods.value = result
    }
    provide('goods', goods)
    getList()
    // 改变sku事件
    // 产出当前选择的商品规格信息，如果是完整的sku，产出完整的对象信息，如果不完整，则产出空对象
    // skuId  sku唯一标识id
    // goods 商品信息对象必须包含specs数组和skus数组
    /**
   * 根据不同sku对象显示不同库存和价格
   */
    const skuVal = ref(null)
    const getSku = (skuObj) => {
      console.log('完整的sku数据', skuObj)
      // 根据id排除skuObj为空对象----sku无效
      if (!skuObj.skuId) {
        skuVal.value = null
        return
      }
      // 库存
      goods.value.inventory = skuObj.inventory
      // 价格 新+老
      goods.value.price = skuObj.price
      goods.value.oldPrice = skuObj.oldPrice
      skuVal.value = skuObj
    }
    // 加入购物车
    // 1. 存储当前选择完规格生成的sku商品数据
    // 2. 没有选择商品规格或库存不足不能添加
    // 3. 调用action传入当前商品必要数据存到vuex
    // 4. 成功后提示

    const addCart = async () => {
      if (!skuVal.value) {
        return msg({ type: 'warn', text: '请选择商品规格' })
      }
      if (!skuVal.value.inventory === 0) {
        return msg({ type: 'warn', text: '库存不足' })
      }
      // 调用actions存储商品类 ----实现持久化同步数据
      const cartDetail = reactive({
        id: goods.value.id,
        name: goods.value.name,
        picture: goods.value.mainPictures[0],
        skuId: skuVal.value.skuId,
        price: skuVal.value.oldPrice,
        nowPrice: skuVal.value.price,
        attrsText: skuVal.value.specsText,
        stock: skuVal.value.inventory,
        selected: true,
        isEffective: true,
        count: numP.value
      })
      try {
        const res = await store.dispatch('cart/addCartListActions', cartDetail)
        console.log(res)
        msg({ type: 'success', text: res })
      } catch (error) {
        msg({ type: 'error', text: '加入失败' })
      }
    }
    return { getList, goods, getSku, numP, addCart }
  }
}
</script>

<style scoped lang='less'>
.goods-item {
  width: 240px;
  height: 300px;
  padding: 10px 30px;
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  transition: all 0.5s;
  .image {
    display: block;
    width: 160px;
    height: 160px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    margin-top: 6px;
    font-size: 16px;
    text-align: center;
    // &.name {
    //   height: 44px;
    // }
    &.desc {
      color: #666;
      height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &.price {
      margin-top: 10px;
      font-size: 20px;
      color: @priceColor;
    }
  }
}

.top {
  height: 70px;
  background: #e26237;
  color: #fff;
  font-size: 18px;
  line-height: 70px;
  padding-left: 25px;
  margin-bottom: 10px;
  font-weight: 400;
  text-align: center;
}
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  // 新增样式
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
    background: #fff;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
  // 图片充满盒子
  img {
    width: 100%;
  }
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>

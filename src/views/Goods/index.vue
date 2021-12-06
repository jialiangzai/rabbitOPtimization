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
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <div class="goods-tabs">
            <!-- 详情图片列表 -->
            <img />
          </div>
        </div>
        <div class="goods-aside"></div>
      </div>
    </div>
  </div>
</template>

<script>
// 1. 定义获取商品详情API函数
// 2. 在组件setup中获取商品详情数据
import { findGoods } from '@/api/goods'
import { useRoute } from 'vue-router'
import { ref, provide } from 'vue'
// 左侧图片预览
import GoodsImage from './components/goods-image.vue'
import GoodsSales from './components/goods-sales'
import GoodsName from './components/goods-name'
export default {
  name: 'XtxGoodsPage',
  components: {
    GoodsImage,
    GoodsSales,
    GoodsName
  },
  setup () {
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
    const getSku = (skuObj) => {
      console.log('完整的sku数据', skuObj)
      // 根据id排除skuObj为空对象----sku无效
      if (!skuObj.skuId) {
        return
      }
      // 库存
      goods.value.inventory = skuObj.inventory
      // 价格 新+老
      goods.value.price = skuObj.price
      goods.value.oldPrice = skuObj.oldPrice
    }
    return { getList, goods, getSku }
  }
}
</script>

<style scoped lang='less'>
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

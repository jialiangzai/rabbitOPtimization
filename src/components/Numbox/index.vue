<template>
  <div class="xtx-numbox">
    <div class="label" v-if="isShow">数量</div>
    <div class="numbox">
      <a href="javascript:;" @click="sub">-</a>
      <input type="text" readonly :value="num" />
      <a href="javascript:;" @click="add">+</a>
    </div>
  </div>
</template>
<script>
// 控制最大最小数量 活动 最大值 库存 或父组件传递的数据 最小值 1 或 父组件传递的数据
// 目的：组件复用最大化

import { ref, watch } from 'vue'
export default {
  // 自定义组件身上使用v-model指令，可以同步组件内部数据的变化到父组件
  name: 'XtxNumbox',
  emits: ['update:modelValue'],
  props: {
    // 显示数量字段
    isShow: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    }
  },
  //   1. 给一个组件身上绑定的任何属性都不会丢失，都会传递下去，如果我们使用props接受收被存入到props属性对象中，如果不使用props接收，会被存入attrs属性对象里
  // 2. 组件一般都有俩种状态，一个是自己维护的响应式数据 （data）一个是由父组件传下来的数据，v- model语法糖它只能保证父组件中的数据可以同步到props这一层，如果你想让父组件中数据和自己维护的数据保持同步的话，需要自行监听props中的数据，在回调中完成数据同步

  setup (props, { emit }) {
    // props.max
    // props.min
    // 定义当前数量
    const num = ref(1)
    // 加
    const add = () => {
      if (num.value === props.max) {
        return
      }
      num.value++
      // 子传父 控制
      emit('update:modelValue', num.value)
    }
    // 减
    const sub = () => {
      if (num.value === props.min) {
        return
      }
      num.value--
      // 子传父 控制
      emit('update:modelValue', num.value)
    }
    watch(() => props.modelValue, (newval) => {
      // 同步父子组件数据
      num.value = newval
    }, {
      // 第一次会失败----不同步
      immediate: true
    })
    return {
      add,
      sub,
      num
    }
  }
}
</script>
<style scoped lang="less">
.xtx-numbox {
  display: flex;
  align-items: center;
  .label {
    width: 60px;
    color: #999;
    padding-left: 10px;
  }
  .numbox {
    width: 120px;
    height: 30px;
    border: 1px solid #e4e4e4;
    display: flex;
    > a {
      width: 29px;
      line-height: 28px;
      text-align: center;
      background: #f8f8f8;
      font-size: 16px;
      color: #666;
      &:first-of-type {
        border-right: 1px solid #e4e4e4;
      }
      &:last-of-type {
        border-left: 1px solid #e4e4e4;
      }
    }
    > input {
      width: 60px;
      padding: 0 5px;
      text-align: center;
      color: #666;
    }
  }
}
</style>

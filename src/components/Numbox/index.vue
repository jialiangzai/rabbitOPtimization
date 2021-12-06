<template>
  <div class="xtx-numbox">
    <div class="label">数量</div>
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

import { ref } from 'vue'
export default {
  // 自定义组件身上使用v-model指令，可以同步组件内部数据的变化到父组件
  name: 'XtxNumbox',
  emits: ['update:modelValue'],
  props: {
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
      default: 5
    }
  },
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

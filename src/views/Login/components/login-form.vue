<template>
  <div class="account-box">
    <!-- 使用第三方组件 不用再form上绑定v-model -->
    <Form
      class="form"
      :validation-schema="rules"
      v-slot="{ errors }"
      autocomplete="off"
      ref="formData"
    >
      <div class="form-item">
        <div class="input">
          <i class="iconfont icon-user"></i>
          <Field
            type="text"
            placeholder="请输入用户名或手机号"
            v-model="fm.account"
            name="account"
            :class="{ error: errors.account }"
          />
        </div>
        <!-- 表单验证错误信息提示 -->
        <div class="error" v-show="errors.account">
          <i class="iconfont icon-warning" />{{ errors.account }}
        </div>
      </div>
      <div class="form-item">
        <div class="input">
          <i class="iconfont icon-lock"></i>
          <Field
            type="password"
            placeholder="请输入密码"
            v-model="fm.password"
            name="password"
            :class="{ error: errors.password }"
          />
        </div>
        <!-- 表单验证错误信息提示 -->
        <div class="error" v-show="errors.password">
          <i class="iconfont icon-warning" />{{ errors.password }}
        </div>
      </div>
      <div class="form-item">
        <div class="agree">
          <!-- 我同意单选框 -->
          <!-- <XtxCheckbox /> name="password" -->
          <Field as="XtxCheckbox" name="isAgree" v-model="fm.isAgree">
            <!-- 支持插槽 -->
            <span>我已同意</span>
          </Field>
          <a href="javascript:;">《隐私条款》</a>
          <span>和</span>
          <a href="javascript:;">《服务条款》</a>
        </div>
        <!-- 表单验证错误信息提示 -->
        <div class="error" v-show="errors.isAgree">
          <i class="iconfont icon-warning" />{{ errors.isAgree }}
        </div>
      </div>
      <a href="javascript:;" class="btn" @click="submit">登录</a>
    </Form>
    <div class="action">
      <img
        src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png"
        alt=""
      />
      <div class="url">
        <a href="javascript:;">忘记密码</a>
        <a href="javascript:;">免费注册</a>
      </div>
    </div>
  </div>
</template>
<script>
// 第三方表单校验组件 定义校验规则
import { Form, Field } from 'vee-validate'
import { ref } from 'vue'
// 校验
import rulesFns from '@/utils/vee-validate-schema'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
// 信息提示
import msg from '@/components/Message/index'
export default {
  name: 'LoginForm',
  components: {
    Form,
    Field
  },
  setup () {
    const store = useStore()
    // 路由实例
    const router = useRouter()
    // 路由参数
    const route = useRoute()
    // form表单
    const formData = ref(null)
    // 表单数据
    const fm = ref({
      account: 'dijia',
      password: '123456',
      isAgree: false
    })
    // 校验规则
    const rules = {
      account: rulesFns.account,
      password: rulesFns.password,
      isAgree: rulesFns.isAgree
    }
    // 点击登录按钮
    const submit = async () => {
      // 整体校验
      // 返回Promise
      const { valid } = await formData.value.validate()
      // console.log(res)
      if (valid) {
        // console.log('loading')
        /**
         * 1. 登录校验完毕执行vuex存储登录人信息做全局数据共享并长久化之后必须在次基础上跳转
         * 2. 跳转页面首页(可携带参数)
         */
        try {
          await store.dispatch('user/getUse', fm.value)
          await store.dispatch('cart/mergeCartAction')
          router.replace(route.query.redirectUrl || '/')
          msg({ type: 'success', text: '登录成功' })
        } catch (error) {
          console.dir(error)
          msg({ type: 'error', text: error.response.data.message })
        }
      }
    }
    return { rules, fm, formData, submit }
  }
}
</script>
<style lang="less" scoped>
// 账号容器
.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;
    a {
      color: @xtxColor;
      i {
        font-size: 14px;
      }
    }
  }
  .form {
    padding: 0 20px;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 36px;
        > i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;
          &.error {
            border-color: @priceColor;
          }
          &.active,
          &:focus {
            border-color: @xtxColor;
          }
        }
        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: @priceColor;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .agree {
      a {
        color: #069;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: @xtxColor;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>

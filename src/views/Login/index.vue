<template>
  <div class="page-login">
    <LoginHeader />
    <!-- 主体登录区域 -->
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">账户登录</a>
        </nav>
        <LoginForm />
      </div>
    </section>
    <LoginFooter />
  </div>
</template>
<script>
import LoginHeader from './components/login-header'
import LoginFooter from './components/login-footer'
import LoginForm from './components/login-form'
export default {
  name: 'PageLogin',
  components: {
    LoginHeader,
    LoginFooter,
    LoginForm
  },
  setup () {
    return {}
  }
}
</script>
<style scoped lang="less"></style>

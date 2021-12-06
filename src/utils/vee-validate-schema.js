
// 表单校验 vee-validate-schema.js
// 格式/函数/正则 -----函数
// 通过返回true 不通过返回error对象
export default {
  // value用户输入的内容
  // 校验account
  account (value) {
    if (!value) return '请输入用户名'
    return true
  },
  // 校验password----正则
  password (value) {
    if (!value) return '请输入合法密码'
    if (!/^\w{6,14}$/.test(value)) {
      return '密码是6-24个字符'
    }
    return true
  },
  isAgree (value) {
    if (!value) return '请勾选同意用户协议'
    return true
  }
}

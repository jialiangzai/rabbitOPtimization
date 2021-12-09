const path = require('path')
module.exports = {
  // 必须在第一层第一个
  chainWebpack: config => {
    config.devServer.disableHostCheck(true)
  },
  lintOnSave: true,

  // 打包后可以部署到任意目录
  publicPath: './',
  devServer: {
    open: true
  },
  // 关于vue add style-resources-loader样式插件配置(webpack、、js/json用loader)
  pluginOptions: {
    // 配置加载器
    'style-resources-loader': {
      // 预处理器风格
      preProcessor: 'less',
      // 配置那些文件自动注入到页面中
      patterns: [
        // 可以为多个
        path.join(__dirname, './src/styles/variables.less')
      ]
    }
  }
}

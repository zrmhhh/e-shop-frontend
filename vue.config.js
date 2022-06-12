const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        '/dev-api/': {
            target: 'http://192.168.50.124:3000', // 本地开发环境
            pathRewrite: {
                '^/dev-api': ''
            }
        }
    }
  }
})

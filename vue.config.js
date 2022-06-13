const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        '/dev-api/': {
            target: 'http://124.4.102.264:3000', // 本地开发环境
            pathRewrite: {
                '^/dev-api': ''
            }
        }
    }
  }
})

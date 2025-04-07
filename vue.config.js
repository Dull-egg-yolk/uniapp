// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.optimization.splitChunks({
      chunks: 'all',
      maxSize: 244 * 1024, // 单文件最大244KB
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    })
  }
}
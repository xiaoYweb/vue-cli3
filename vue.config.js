const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const publicPath = process.env.NODE_EVN === 'production'
? ''
: ''

module.exports = {
  lintOnSave: false,

  publicPath,

  chainWebpack: config => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('_c', resolve('src/components'))
    .set('_el', resolve('src/components/element'))
  },

  productionSourceMap: false,

  // outputDir: 'ljbj',

  devServer: {
    port: '8383',
    // proxy: 'http://192.168.20.16/hrss'
    // proxy: {
    //   '/hrss':{
    //     target:'http://hrss.xlylai.com'
    //     // target:'http://192.168.20.18'
    //   },
    // },
    // proxy: 'http://hrss.xlylai.com/hrss'
  }
}

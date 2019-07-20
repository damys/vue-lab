const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Timestamp = new Date().getTime()
const Version = 'V0.01' // 生产模式

module.exports = {
  publicPath: './',
  assetsDir: 'assets',
  filenameHashing: false,
  productionSourceMap: false,
  // runtimeCompiler: false,
  lintOnSave: process.env.NODE_ENV !== 'production', // 关闭eslint代码检查
  // css: {
  //   extract: false, // 是否使用css分离插件 ExtractTextPlugin
  //   sourceMap: false, // 开启 CSS source maps
  //   modules: false // 启用 CSS modules for all css / pre-processor files.
  //   // css 预设器配置项
  //   // loaderOptions: {
  //   //     sass: {
  //   //         data: `@import "./src/assets/hotcss/px2rem.scss";`
  //   //     }
  //   // }
  // },
  devServer: {
    port: 8086,
    host: '127.0.0.1', // 0.0.0.0
    // open: true,          // 配置自动启动浏览器
    https: false,
    hotOnly: false,

    // 是否让浏览器同时显示警告和错误
    overlay: {
      warnings: false,
      errors: false
    }
  },

  // 修改打包后js文件名  https://webpack.js.org/configuration/output/#outputchunkfilename
  configureWebpack: { // webpack 配置
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
      filename: `assets/js/[name].bundle.js`,
      chunkFilename: `assets/js/[name].js`
      // chunkFilename: `assets/js/[name].[hash].${Timestamp}.js`   -- [hash,chunkhash,name
    }
    // 修改打包后css文件名
    // plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: `css/[name].css`,
    //     chunkFilename: `css/[name].css`
    //   })
    // ]
  }
}

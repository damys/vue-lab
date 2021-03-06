'use strict'
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
    // 入口
    entry:{
        main:'./src/main.js'
    },
    
    // 出口
    output:{
        // 所有产出资源路径
        path:path.join(__dirname, 'dist'),
        filename:'build.js'
    },
    
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test:/\.(jpg|png|git|svg|ttf|woff|woff2)$/,
                loader:'url-loader',
                options:{
                    limit:4096,    // 4096 字节以上生成文件,否则base64
                    name:'[name].[ext]'
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/(node_modules|bower_components)/,
                options:{
                    presets:['es2015'],           // 关键字
                    plugins:['transform-runtime'] // 函数
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
    
    
}

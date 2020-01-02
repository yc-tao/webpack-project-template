
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    mode: 'development', // 开发模式
    target: 'web',         // app.js中可以使用document方法
    entry: './app/app.js', // 入口
    output: {
        path: path.resolve(process.cwd(), 'dist'), // 输出路径
        publicPath:'/dist/',                       // 虚拟目录
        filename: '[name].js',                     // 输出主文件名
        chunkFilename: '[name].chunk.js',          // 输出块问件名
    },
    module:{
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            /**
             * /向template或者templateContent中注入所有静态资源，不同的配置值注入的位置不经相同，
             * 1、true或者body：所有JavaScript资源插入到body元素的底部
             * 2、head: 所有JavaScript资源插入到head元素中
             * 3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
             * */
            inject: true,

            template: 'app/index.html', // 本地模板文件的路径
        })
    ]
}

module.exports = config
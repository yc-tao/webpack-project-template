
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    mode: 'production', // 开发模式
    target: 'web',         // app.js中可以使用document方法
    entry: './app/app.js', // 入口
    output: {
        path: path.resolve(process.cwd(), 'build'), // 输出路径
        publicPath:'/build/',                       // 虚拟目录
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
            minify: {
                //是否移除注释 默认false
                removeComments: true,
                //是否去除空格，默认false
                collapseWhitespace: true,
                //删除多余的属性
                removeRedundantAttributes: true,
                //使用短的文档类型，默认false
                useShortDoctype: true,
                //是否删除空属性，默认false
                removeEmptyAttributes: true,
                //删除style的类型属性， type="text/css" 默认值false
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        })
    ]
}

module.exports = config
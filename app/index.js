const express = require('express')
const app = express()

const fs = require('fs')
const path = require('path')

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('../webpack/webpack.dev.conf')

function createWebpackMiddleware(compiler, publicPath) {
    return webpackDevMiddleware(compiler, {
        logLevel: 'warn',
        publicPath,
        silent: true,
        stats: 'errors-only',
    });
}

function addDevMiddlewares(app, webpackConfig) {
    const compiler = webpack(webpackConfig);
    const middleware = createWebpackMiddleware(
        compiler,
        webpackConfig.output.publicPath,
    );

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));

    // 从实时打包的路径中取
    const fs = middleware.fileSystem;

    app.get('*', (req, res) => {
        fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
            if (err) {
                res.sendStatus(404);
            } else {
                res.send(file.toString());
            }
        });
    });
};

addDevMiddlewares(app,webpackConfig)

const host = "http://127.0.0.1"
const port = 8050
app.listen(port,async err=>{
    if(err){
        console.error(err)
    }else{
        console.log('server start ', host+ ":" + port)
    }
})
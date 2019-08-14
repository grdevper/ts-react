const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const HappyPack = require('happypack')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const config = process.env.NODE_ENV === 'production' ?
 require('./config.prod') : require('./config.dev')
const manifest = require('../.dll/manifest')

module.exports = {
  devtool: 'hidden-source-map',
  output: {
    path: path.join(config.contextPath, config.path),
    filename: 'js/[name].js',
    chunkFilename: 'chunk/[name].js',
    publicPath: `${config.publicPath}`, //静态资源的根路径，如果通过服务端启动项目，就是静态资源的路径
    pathinfo: false
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, '../tsconfig.webpack.json'),
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      })
    ],
    alias: {
      mobx: path.join(__dirname, '../node_modules/mobx/lib/mobx.es6.js')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // all, async, initial 三选一, 插件作用的chunks范围// initial只对入口文件处理
      name: 'chunk',
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: config.templateName,
      template: path.join(__dirname, `../src/template/${config.templateName}`),
      hash: config.env === 'development',
      title: config.title,
      inject: true,
      minify: {
        collapseWhitespace: config.dev === 'production',
        minifyJS: config.env === 'production',
      }
    }),
    new HappyPack({
      id: 'babel',
      loaders: [
        'cache-loader',
        'babel-loader?cacheDirectory'
      ],
      threadPool: HappyPack.ThreadPool({size: 4}),
      verboseWhenProfiling: true,
    }),
    new CaseSensitivePathsPlugin(),
    new webpack.DllReferencePlugin({
      manifest
    }),
    new AddAssetHtmlPlugin({
      filepath: path.join(__dirname, '../.dll/dll.js'),
      includeSourcemap: false,
      hash: true,
    })
  ],
  node: {
    fs: 'empty',
    path: 'empty',
    console: false,
    process: true,
    global: true,
    Buffer: true,
    setImmediate: true,
    __filename: 'mock',
    __dirname: 'mock',
  },

  cache: true, // boolean
  watch: false, // boolean
};
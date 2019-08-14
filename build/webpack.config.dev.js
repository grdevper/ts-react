const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const webpack = require('webpack')
const openBrowser = require('react-dev-utils/openBrowser')

const config = process.env.NODE_ENV === 'production' ?
 require('./config.prod') : require('./config.dev')
const baseConfig = require('./webpack.config.base')

const devConfig = {
  devServer: {  
    port: config.port,  
    hot: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    after: function() {
        openBrowser(`http://localhost:${config.port}`)
    }
  },
  mode: 'development',  
  devtool: 'cheap-module-source-map',
  stats: 'minimal',
  entry: {
    index: ['./src/index.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: [path.join(__dirname, '../src')],
        exclude: /node_modules/,
        loader: 'happypack/loader?id=babel',
      },
      {
        test: /\.css$/,
        include: [path.join(__dirname, '../node_modules')],
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: {
                'primary-color': '#1DA57A'
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'img/[name].[hash:7].[ext]' 
            }
          }  
        ]
      },
      {
        test: /\.(svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'fonts/[name].[hash:7].[ext]'   
            }
          }  
        ]
      },
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: '编译进度：[:bar] :percent (耗时：:elapsed 秒)',
      clear: true,
      width: 60,
      strem: process.stdout ? process.stdout : undefined,  
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${config.env}"`,
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      chunkFilename: 'chunk/[name].css'
    }),
  ]
};

const webpackConfig = merge(baseConfig, devConfig);

module.exports = webpackConfig;
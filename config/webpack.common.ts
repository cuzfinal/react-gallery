import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyWebPlugin from 'copy-webpack-plugin'
import { publicPath, src } from './env'


const common: webpack.Configuration = {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'js/[name].[hash:5].js',
    chunkFilename: 'js/[name].[hash:5].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.less'],
    alias: {
      '@': src
    }
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [
        'babel-loader',
        'ts-loader'
      ]
    }, {
      test: /\.less$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader'
      }, {
        loader: 'less-loader'
      }]
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|eot|ttf)$/,
      loader: 'url-loader',
      options: {
        limit: 8192,
        name: 'assets/[name].[hash:5].[ext]'
      }
    }]
  },
  plugins: [
    new CopyWebPlugin([{from: publicPath}]),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:5].css",
      chunkFilename: "css/[name].[hash:5].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}

export default common
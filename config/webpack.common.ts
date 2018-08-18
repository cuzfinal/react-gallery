import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyWebPlugin from 'copy-webpack-plugin'
import { publicPath, src, nodeModules } from './env'

const common: webpack.Configuration = {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: '[name].[hash:4].js',
    chunkFilename: 'chunks/[name].[hash:4].js',
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
      loader: 'awesome-typescript-loader',
      exclude: nodeModules,
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
        name: 'assets/[name].[hash:4].[ext]'
      }
    }]
  },
  plugins: [
    new CopyWebPlugin([{from: publicPath}]),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:4].css",
      chunkFilename: "[id].[hash:4].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
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
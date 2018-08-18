import common from './webpack.common'
import merge from 'webpack-merge'
import webpack from 'webpack'

const dev: webpack.Configuration = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    historyApiFallback: true,
    port: 8800,
    overlay: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})

export default dev
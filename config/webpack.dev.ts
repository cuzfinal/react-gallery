import common from './webpack.common'
import merge from 'webpack-merge'
import webpack, { Configuration } from 'webpack'

const config: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}

const dev: Configuration = merge(common, config, {
  devServer: {
    host: 'localhost',
    historyApiFallback: true,
    port: 8800,
    overlay: true
  },
})

export default dev
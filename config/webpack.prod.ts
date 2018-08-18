import common from './webpack.common'
import merge from 'webpack-merge'
import webpack from 'webpack'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'

const prod: webpack.Configuration = merge(common, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin(),
  ]
})

export default prod
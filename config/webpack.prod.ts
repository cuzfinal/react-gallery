import common from './webpack.common'
import merge from 'webpack-merge'
import { Configuration } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import TerserPlugin from 'terser-webpack-plugin'

const config: Configuration = {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin()
    ]
  }
}

const prod: Configuration = merge(common, config)

export default prod
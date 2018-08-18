import dev from './config/webpack.dev'
import prod from './config/webpack.prod'
import webpack from 'webpack'

let config: webpack.Configuration
if(process.env.NODE_ENV === 'development') {
  config = dev
} else {
  config = prod
}

export default config
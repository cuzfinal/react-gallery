import path from 'path'
import fs from 'fs'
import webpack from 'webpack'
import config from '../webpack.config'

process.env.NODE_ENV = 'production'

const compiler = webpack(config)
compiler.run((err, stats) => {
  if(err) {
    return console.log(err)
  }
})
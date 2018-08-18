import path from 'path'
import fs from 'fs'

export const appDirectory = fs.realpathSync(process.cwd())
export const buildPath = (dir: string) => path.resolve(appDirectory, dir)
export const publicPath = buildPath('public')
export const distPath = buildPath('dist')
export const src = buildPath('src')
export const nodeModules = buildPath('node_modules')
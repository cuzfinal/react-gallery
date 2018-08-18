import Router from 'koa-router'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import path from 'path'
import App from '../../src/app'
import webpack from 'webpack'
const redirect = require('redirect')

process.env.NODE_ENV = 'development'
const route = new Router()

route.get('*', async ctx => {
  const context = {url: ''}
  const mark = renderToString(
    <StaticRouter
      location={ctx.request.url}
      context={context}>
      <App/>
    </StaticRouter>
  )
  if(context.url) {
    redirect(301, context.url)
  }
  ctx.body = mark
})

export default route
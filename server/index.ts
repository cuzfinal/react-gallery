import Koa from 'koa'
import route from './routes'
import serve from 'koa-static'

const open = require('open')

const app = new Koa()

app.use(route.routes())
app.use(route.allowedMethods())

app.listen(3000, () => console.log('app listening port 3000'))

if(process.env.NODE_ENV === 'development')
  open('http://localhost:3000')
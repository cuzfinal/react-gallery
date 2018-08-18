import ReactDOM from 'react-dom'
import React from 'react'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import './index.less'

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.querySelector('#app')
)
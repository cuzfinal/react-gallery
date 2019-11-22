import React, { Component } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import Home from './pages/home'
import { CompLoadable } from './utils/loadable'

const Detail = () => import(/* webpackChunkName: "detail" */ './pages/detail')
const About = () => import(/* webpackChunkName: "about" */ './pages/about')

export default class App extends Component{
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/detail/param">Detail</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/detail/:id' component={CompLoadable(Detail)}/>
          <Route path='/about' component={CompLoadable(About)}/>
          <Redirect to='/'/>
        </Switch>
      </div>
    )
  }
}
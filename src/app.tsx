import React, { Component } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import Home from './pages/home'
import { CompLoadable } from './utils/loadable'

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
          <Route path='/detail/:id' component={CompLoadable(() => import('./pages/detail'))}/>
          <Route path='/about' component={CompLoadable(() => import('./pages/about'))}/>
          <Redirect to='/'/>
        </Switch>
      </div>
    )
  }
}
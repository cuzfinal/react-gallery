import React, { Component, ChangeEvent } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/home'
import { CompLoadable } from './utils/loadable'

export default class App extends Component{
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='about'>About</Link></li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={CompLoadable(() => import('./pages/about'))}/>
            <Redirect to='/'/>
          </Switch>
        </div>
      </div>
    )
  }
}
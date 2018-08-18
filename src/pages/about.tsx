import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
export default class Detail extends Component{
  render() {
    return <>
      <Helmet>
        <title>about</title>
      </Helmet>
      <h1>About</h1>
    </>
  }
}
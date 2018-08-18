import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { RouteComponentProps } from 'react-router-dom'

export default class Detail extends Component<RouteComponentProps<{id: string}>>{
  render() {
    const {match} = this.props
    const id = match.params.id
    return <>
      <Helmet>
        <title>detail</title>
      </Helmet>
      <h1>Detail: {id}</h1>
    </>
  }
}
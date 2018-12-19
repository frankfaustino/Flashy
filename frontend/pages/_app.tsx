import App, { Container } from 'next/app'

import Layout from '../components/layout'

export default class Root extends App {
  render() {
    const { Component } = this.props

    return (
      <Container>
        <Layout>
          <Component />
        </Layout>
      </Container>
    )
  }
}
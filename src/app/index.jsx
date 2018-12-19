import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import * as actions from './actions'
import { Card, Header, Nav, Back, Button, Forward, Flip } from './components'

class App extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    flip: PropTypes.func.isRequired,
    flipped: PropTypes.bool.isRequired,
    getCurrent: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.getCurrent()
  }

  render() {
    const { flip, flipped, next, prev, content, type } = this.props
    return (
      <>
        <div className="container">
          <Header />
          <Nav />
          <Card flipped={flipped} type={type}>{content}</Card>
          <Button action={flip} className="flip-button"><Flip /></Button>
        </div>
        <Button action={prev} className="back-button"><Back /></Button>
        <Button action={next} className="forward-button"><Forward /></Button>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const mapStateToProps = ({ current: { content, flipped, type } }) => ({
  content,
  flipped,
  type
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {sayHello} from '../actions'

class App extends Component {

  componentWillMount() {
    this.props.sayHello();
  }

  render() {

    return (
      <h1>{this.props.hello}</h1>
    );

  }
}

function mapStateToProps(state) {
  return {
    hello: state.hello
  }
}

function mapDispatchToProps(dispatch) {
  return { sayHello: bindActionCreators(sayHello, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

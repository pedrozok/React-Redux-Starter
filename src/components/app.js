import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div style={{ display:'flex', justifyContent: 'center',flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <h1 style={{ color: '#484848', fontFamily: 'proxima-nova,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif' }}>React</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <img style={{ maxWidth: '200px', maxHeight: '200px' }} src='http://coenraets.org/present/react/img/react.png'/>
        </div>
      </div>
    );
  }
}

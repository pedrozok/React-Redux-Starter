import React, { Component } from 'react';

export default class Image extends Component {

  constructor(props) {
    super(props);
  }

  render(props) {
    return (
        <div>
        <img src={this.props.src} />
        </div>
    );
  }
}

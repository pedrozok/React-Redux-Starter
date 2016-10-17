import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchAPI } from '../actions';
import { bindActionCreators } from 'redux'

class Hello extends Component {

  constructor(props){
    super(props);

    this.renderList = this.renderList.bind(this);
  }

renderList() {
  console.log(this.props.list);

  var data = this.props.list;

  return data.map(video => {
    return <img key={video.data.id} src={video.data.thumbnail} />
  })

}

  componentWillMount() {
    this.props.fetchAPI();
  }

  render() {
    return (
      <div>
      {this.renderList()}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    list: state.list
  }
}

function mapDispatchToProps(dispatch) {
  return { fetchAPI: bindActionCreators(fetchAPI, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

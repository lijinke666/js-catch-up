import React, { Component } from 'react';
import './styles.css';

export default class Slider extends Component {
  state = {
    show: true
  };
  onDestroy = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="">
        {this.state.show ? this.props.children(this.onDestroy) : undefined}
      </div>
    );
  }
}

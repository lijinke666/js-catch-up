import React, { Component } from 'react';
import footer from './components/Footer';

@footer('哈哈')
export default class FooterPage extends Component {
  handleClick = () => {
    this.props.footer.hide();
  };
  render() {
    return (
      <div>
        <h2>基本用法: 组件包裹</h2>
        <button onClick={this.handleClick}>隐藏footer</button>
      </div>
    );
  }
}

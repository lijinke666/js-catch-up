import React, { Component } from 'react';
import footer from './components/Footer';

@footer('哈哈')
export default class FooterPage extends Component {
  render() {
    return <h2>基本用法: 组件包裹</h2>;
  }
}

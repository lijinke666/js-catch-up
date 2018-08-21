import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import "./styles.css"

@hot(module)
export default class App extends Component {
  goto = url => {
    this.props.history.push(url);
  };
  render() {
    return (
      <>
        <button onClick={() => this.goto('/footer')}>(组件包裹)</button>
        <button onClick={() => this.goto('/autoLoading')}>
          反向继承 和渲染劫持 (自动显示加载 autoLoading)
        </button>
        <button onClick={() => this.goto('/connect')}>
          属性代理 (Connect)
        </button>
        <button onClick={()=> this.goto('/bind')}>更改 Props (双向绑定)</button>
      </>
    );
  }
}

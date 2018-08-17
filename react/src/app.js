import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  goto = url => {
    this.props.history.push(url);
  };
  render() {
    return (
      <>
        <button onClick={() => this.goto('/footer')}>高阶组件基本用法</button>
        <button onClick={() => this.goto('/autoLoading')}>
          反向继承 (自动显示加载 autoLoading)
        </button>
        <button onClick={() => this.goto('/form')}> 属性代理 (Connect)</button>
      </>
    );
  }
}

export default hot(module)(App);

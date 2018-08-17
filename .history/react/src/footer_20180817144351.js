import React, { Component } from 'react'
import divider from "./hoc/divider"

@divider("我是分割线")
export default class footerPage extends Component {
  handleClick = () => {
    this.props.divider.hide()
  }
  render() {
    return (
      <div>
        <h2>测试</h2>
        <button onClick={this.handleClick}>隐藏footer</button>
      </div>
    )
  }
}
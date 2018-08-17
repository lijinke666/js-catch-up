import React, { Component } from 'react'
import divider from "./hoc/divider"

@divider("我是分割线")
export default class DividerPage extends Component {
  render() {
    return (
      <div>
        测试
      </div>
    )
  }
}
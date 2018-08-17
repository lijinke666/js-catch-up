import React, { Component } from 'react'

export default class Page extends Component {
  goto = (url)=>{
    this.props.history.push(url)
  }
  render() {
    return (
      <>
        <button onClick={()=> this.goto('/divider')}> 分割线 Divider</button>
        <button onClick={()=> this.goto('/loading')}> 自动显示加载 autoLoading</button>
        <button onClick={()=> this.goto('/form')}> 模仿 antd Form</button>
      </>
    )
  }
}

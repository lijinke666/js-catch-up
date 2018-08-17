import React, { Component } from 'react'
import autoLoading from "./components/AutoLoading"

@autoLoading((_,{list})=> list.length < 1 )
export default class AutoLoadingPage extends Component {
  state = {
    list:[]
  }
  render() {
    return (
      <div>
        <h2>Auto Loading Page</h2>
        {
          this.state.list.map((value,i)=>{
            return (
              <p key={i}>{value}</p>
            )
          })
        }
      </div>
    )
  }
  fetch = ()=>{
    //模拟一个请求
    setTimeout(()=>{
      this.setState({
        list:[1,2,3]
      })
    },2000)
  }
  componentDidMount(){
    this.fetch()
  }
}
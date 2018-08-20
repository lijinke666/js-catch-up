import React, { Component } from 'react';
import connect from './components/Connect';

@connect(
  ({ name, type }) => ({
    name,
    type
  }),
  dispatch => ({
    setName: dispatch.setName()
  })
)
export default class Connect extends Component {
  onSetName = ()=>{
    this.props.setName("小明同学")
  }
  render() {
    const { name, type } = this.props;
    return (
      <>
        <div> 名字 : {type} </div>
        <p> By : {name}</p>
        <button onClick={this.onSetName}>触发action</button>
      </>
    );
  }
}

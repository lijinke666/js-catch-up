import React,{ PureComponent } from 'react'
import { getDisplayName } from '../utils';

export default (WrappedComponent)=> {
  return class Bind extends PureComponent {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

    state = {
      name:""
    }
    onChange = (e)=>{
      this.setState({
        name:e.target.value
      })
    }
    render(){
      const newProps = {
        autoBind:{
          value: this.state.name,
          onChange: this.onChange
        },
        getValues: ()=> this.state
      }
      return (
        <WrappedComponent {...this.props} {...newProps}/>
      )
    }
  }
}
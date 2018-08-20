import React, { PureComponent } from 'react';
import { getDisplayName } from '../utils';

const state = {
  name: 'js-catch-up',
  type: 'connect'
};

const dispatch = (action)=>{
  console.log('dispatch:',action);
}

const action = (name)=> {
  dispatch({
    type:"SAY_HELLO",
    name
  })
}

const actions = {
  setName : ()=> action
}

export default (mapStateToProps, mapDispatchToProps) => Component => {
  return class Connect extends PureComponent {
    static displayName = `HOC(${getDisplayName(Component)})`;

    state = state

    constructor(props) {
      super(props);
    }
    render() {
      return (
        <Component 
          {...this.props} 
          {...mapStateToProps(state)}
          {...mapDispatchToProps(actions)}
        />
      )
    }
  };
};

import React, { Component } from 'react';
import { getDisplayName } from './utils';

export default title => WrapComponent => {
  return class HOC extends Component {
    static displayName = `HOC(${getDisplayName(WrapComponent)})`;

    render() {
      <div>
        <h2>{title}</h2>
        {/* <WrapComponent /> */}
      </div>;
    }

    componentDidMount(){
      console.log(getDisplayName(WrapComponent))
    }
  };
};

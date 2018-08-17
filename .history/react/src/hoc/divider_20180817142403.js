import React, { PureComponent } from 'react';
import { getDisplayName } from './utils';

export default title => Component => {
  return class HOC extends PureComponent {
    static displayName = `HOC(${getDisplayName(Component)})`;

    state = {
      visible: true
    };
    hide = () => {
      console.log(11);
      this.setState({ visible: false });
    };
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <>
          <h2>{title}</h2>
          <Component {...this}/>
        </>
      );
    }
  };
};

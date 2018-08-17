import React, { PureComponent } from 'react';
import { getDisplayName } from './utils';

export default title => Component => {
  return class HOC extends PureComponent {
    static displayName = `HOC(${getDisplayName(Component)})`;

    state = {
      visible: true
    };
    hide = () => {
      this.setState({ visible: false });
    };
    constructor(props) {
      super(props);
    }
    render() {
      const { visible } = this.state;
      return (
        <>
          {visible ? <h2>{title}</h2> : undefined}

          <Component {...this} />
        </>
      );
    }
  };
};

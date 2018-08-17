import React, { PureComponent } from 'react';
import { getDisplayName } from './utils';
import "./styles.less"

export default title => Component => {
  return class Footer extends PureComponent {
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
          {visible ? <footer className="footer">{title}</footer> : undefined}

          <Component {...{footer:this}} />
        </>
      );
    }
  };
};

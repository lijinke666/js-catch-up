import React, { PureComponent } from 'react';
import { getDisplayName } from '../utils';
import "./styles.css"

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

      const newProps = {
        footer: {
          hide: this.hide
        }
      }
      return (
        <>
          {visible ? <footer className="footer">{title}</footer> : undefined}

          {/* 属性代理 */}
          <Component {...this.props} {...newProps} />
        </>
      );
    }
  };
};

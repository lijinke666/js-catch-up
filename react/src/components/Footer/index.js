import React, { PureComponent } from 'react';
import { getDisplayName } from '../utils';
import './styles.css';

export default title => Component => {
  return class Footer extends PureComponent {
    static displayName = `HOC(${getDisplayName(Component)})`;

    constructor(props) {
      super(props);
    }
    render() {
      console.log(this.props);
      return (
        <>
          <footer className="footer">{title}</footer> 
          <Component/>
        </>
      );
    }
  };
};

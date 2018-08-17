import React, { PureComponent } from 'react';
import { getDisplayName } from './utils';

console.log(getDisplayName);

export default title => Component => {
  return class HOC extends PureComponent {
    static displayName = `HOC(${getDisplayName(Component)})`;

    render() {
      <>
        <h2>{title}</h2>
        <Component />
      </>;
    }
  };
};

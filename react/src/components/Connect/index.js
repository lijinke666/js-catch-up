import React, { PureComponent } from 'react';
import { getDisplayName } from '../utils';

const state = {
  name: 'js-catch-up',
  type: 'connect'
};

const dispatch = action => {
  console.log('dispatch:', action);
  alert(JSON.stringify(action, undefined, 2));
};

const action = name => {
  dispatch({
    type: 'SAY_HELLO',
    name
  });
};

const actions = {
  setName: () => action
};

export default (mapStateToProps, mapDispatchToProps) => WrappedComponent => {
  return class Connect extends PureComponent {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

    state = state;

    constructor(props) {
      super(props);
    }
    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...mapStateToProps(state)}
          {...mapDispatchToProps(actions)}
        />
      );
    }
  };
};

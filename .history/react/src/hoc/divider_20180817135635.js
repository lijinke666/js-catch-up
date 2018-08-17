import React, { Component } from 'react';
import { getDisplayName } from './utils';

export default title => WrapComponent => {
  return class HOC extends Comment {
    static displayName = `HOC(${getDisplayName(WrapComponent)})`;

    render() {
      <>
        <h2>{title}</h2>
        <WrapComponent />
      </>;
    }
  };
};

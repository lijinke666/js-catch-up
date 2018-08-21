import React from 'react';
import { getDisplayName } from '../utils';
import './styles.css';

export default checkLoading => WrappedComponent => {
  //AutoLoading 继承 了 WrappedComponent 而不是 WrappedComponent 继承 AutoLoading  
  //所以叫反向继承
  return class AutoLoading extends WrappedComponent {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

    constructor(props) {
      super(props);
    }
    render() {
      console.log(this.props);
      if (checkLoading(this.props, this.state)) {
        return (
          <div className="flex">
            <div className="loading">Loading...</div>
          </div>
        );
      }
      return super.render();
    }
  };
};

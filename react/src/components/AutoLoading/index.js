import React from 'react';
import { getDisplayName } from '../utils';
import "./styles.css"

export default (checkLoading) => Component => {
  return class Footer extends Component {
    static displayName = `HOC(${getDisplayName(Component)})`;

    constructor(props) {
      super(props);
    }
    render() {
      if(checkLoading(this.props,this.state)){
        return (
          <div className="flex">
            <div className="loading">Loading...</div>
          </div>
        )
      }
      return super.render()
    }
  };
};

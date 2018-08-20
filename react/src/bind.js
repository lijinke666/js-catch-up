import React, { PureComponent } from 'react';
import autoBind from './components/AutoBind';

@autoBind
export default class BindPage extends PureComponent {
  getValues = () => {
    const values = this.props.getValues();
    alert(JSON.stringify(values, undefined, 2));
  };
  render() {
    return (
      <>
        <h2>双向绑定</h2>
        <input type="text" {...this.props.autoBind} />
        <pre>{JSON.stringify(this.props.getValues(), undefined, 2)}</pre>
        <button onClick={this.getValues}>获取value</button>
      </>
    );
  }
}

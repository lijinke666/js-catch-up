import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Divider from './divider';


const App = ()=> (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Divider} />
      <Route exact path="/divider" component={Divider} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from "./page"
import Divider from './divider';


const App = ()=> (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Page} />
      <Route exact path="/divider" component={Divider} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

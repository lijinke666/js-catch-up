import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./app"
import Divider from './divider';


const MyApp = ()=> (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/divider" component={Divider} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <MyApp/>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./app"
import Footer from './footer';


const MyApp = ()=> (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/footer" component={Footer} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <MyApp/>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./app"
import Footer from './footer';
import AutoLoading from "./autoLoading"
import Connect from './Connect';


const MyApp = ()=> (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/footer" component={Footer} />
      <Route exact path="/autoLoading" component={AutoLoading} />
      <Route exact path="/connect" component={Connect} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <MyApp/>,
  document.getElementById('root')
);

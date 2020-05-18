import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import { createBrowserHistory as history } from 'history';
import App from './app';
import Plantopia from './plantopia'
import SpareLeash from './spareleash'
import Fun from './fun'
import Cocktail from './cocktail'
import '../assets/stylesheets/application.scss';


ReactDOM.render(
<Router >
  <Switch>
    <Route exact path="/" component={App}  />
    <Route exact path="/plantopia"  component={Plantopia}  />
    <Route exact path="/spareleash"  component={SpareLeash}  />
    <Route exact path="/cocktail"  component={Cocktail}  />
    <Route exact path="/fun"  component={Fun}  />
  </Switch>


</Router>,

  document.getElementById('root'));

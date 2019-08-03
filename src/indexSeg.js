import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import './index.css';

// Pages
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import DashboardBeneficiary from './pages/DashboardBeneficiary/index';
import DashboardProvider from './pages/DashboardProvider/index';
import DashboardDonor from './pages/DashboardDonor/index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard_beneficiary" component={DashboardBeneficiary} />
          <Route path="/dashboard_provider" component={DashboardProvider} />
          <Route path="/dashboard_donor" component={DashboardDonor} />
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

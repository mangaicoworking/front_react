import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home/index';
import DashboardBeneficiary from './pages/DashboardBeneficiary/index';
import DashboardProvider from './pages/DashboardProvider/index';
import DashboardDonor from './pages/DashboardDonor/index';
import Register from './pages/Register/index';
import Login from './pages/Login/index';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard_beneficiary" component={DashboardBeneficiary} />
      <Route path="/dashboard_provider" component={DashboardProvider} />
      <Route path="/dashboard_donor" component={DashboardDonor} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}
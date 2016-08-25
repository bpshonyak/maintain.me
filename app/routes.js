import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

import LoginForm from './components/auth/login_form';
import SignUpForm from './components/auth/signup_form';
import Logout from './components/auth/logout';

import Dashboard from './components/dashboard';

export default (
  <Route path="/" component={App}>
    <Route path="login" component={LoginForm} />
    <Route path="logout" component={Logout} />
    <Route path="signup" component={SignUpForm} />
    <Route path="dashboard" component={Dashboard} />
  </Route>
)

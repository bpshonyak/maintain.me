import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

// Auth routes
import LoginForm from './components/auth/login_form';
import SignUpForm from './components/auth/signup_form';
import Logout from './components/auth/logout';
import RequiredAuth from './components/auth/require_auth';

// Unprotected routes
import Welcome from './components/welcome';

//Protected routes
import Dashboard from './components/dashboard/dashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="login" component={LoginForm} />
    <Route path="logout" component={Logout} />
    <Route path="signup" component={SignUpForm} />
    <Route path="dashboard" component={RequiredAuth(Dashboard)} />
  </Route>
)

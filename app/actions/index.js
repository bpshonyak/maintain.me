import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER, DEAUTH_USER } from './types';

const API_URL = "http://localhost:3000";

export function logInUser({email, password}) {
  return (dispatch) => { // Use redux-thunk to manually call the dispatch method
    axios.post(`${API_URL}/login`, {email, password})
      .then( response => {

        // 1. Dispatch action to update authentication status to true
        // 2. Save JWT token
        // 3. Redirect user to dashboard

        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/dashboard'); // redirect user
      })
      .catch( () => {

      })
  }
}

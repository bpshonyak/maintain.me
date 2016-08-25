import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER, DEAUTH_USER, AUTH_ERROR, PROFILE_DATA } from './types';

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
        dispatch(authError('Incorrect username or password.'));
      })
  }
}

export function signUpUser({email, password, confirmPassword}) {
  return (dispatch) => { // Use redux-thunk to manually call the dispatch method
    axios.post(`${API_URL}/signup`, {email, password, confirmPassword})
      .then( response => {

        // 1. Dispatch action to update authentication status to true
        // 2. Save JWT token
        // 3. Redirect user to dashboard

        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/dashboard'); // redirect user
      })
      .catch( response => {
        console.log(response.data.errors);
        dispatch(authError('Email already exists or passwords do not match.'));
      })
  }
}

export function authError(errorMsg) {
  return {
    type: AUTH_ERROR,
    payload: errorMsg
  }
}

export function logOutUser() {

  localStorage.removeItem('token');

  return {
    type: DEAUTH_USER
  }
}

export function getProfile() {
  return (dispatch) => {

    const token = localStorage.getItem('token');

    axios.get(`${API_URL}/account/profile`, {
      headers: {
        authorization: `bearer ${token}`
      }
    }).then( response => {
      console.log(response.data.profile.email);
      dispatch({
        type: PROFILE_DATA,
        payload: response.data.profile
      });
    });
  }
}

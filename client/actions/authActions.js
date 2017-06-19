import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(userData) {
  return function(dispatch) {
    // return axios.post('https://rss-reader-backend.herokuapp.com/Users/', userData)
    return axios.post('http ://localhost:3000/login/', userData)
      .then((res) => {
        dispatch({type: "LOGIN_SUCCESS"})
        setCurrentUser(res);
      })
      .catch((err) => {
        dispatch({type: "LOGIN_ERROR", payload: err})
      })
  }
}

import axios from 'axios';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function userSignupRequest(userData) {
  return function(dispatch) {
    return axios.post('https://rss-reader-backend.herokuapp.com/Users/', userData)
      .then((res) => {
        dispatch({type: "SIGNUP_SUCCESS"})
        setCurrentUser(res);
      })
      .catch((err) => {
        dispatch({type: "SIGNUP_ERROR", payload: err})
      })
  }
}

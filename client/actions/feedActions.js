import axios from 'axios';

export function loadFeeds() {
  return function(dispatch) {
    dispatch({type: "LOAD_FEEDS"});
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=http://www.computerworld.com.br%2FRSS2')
      .then((res) => {
        dispatch({type: "LOAD_FEEDS_SUCCESS", payload: res})
      })
  }
}

export function loadSavedFeeds(id) {
  console.log(id);
  return function(dispatch) {
    dispatch({type: "LOAD_SAVED_FEEDS"});
    axios.get('https://rss-reader-backend.herokuapp.com/PersonalFeeds/'+id)
      .then((res) => {
        dispatch({type: "LOAD_SAVED_FEEDS_SUCCESS", payload: res})
      })
  }
}

export function saveFeed(obj) {
  return function(dispatch) {
    dispatch({type: "SAVE_FEED"});
    axios.post('https://rss-reader-backend.herokuapp.com/PersonalFeeds/', obj)
      .then((res) => {
        dispatch({type: "SAVE_FEED_SUCCESS", payload: res})
      })
  }
}

export function removeFeed(obj) {
  console.log(obj);
  return function(dispatch) {
    dispatch({type: "DELETE_FEED"});
    axios.delete('https://rss-reader-backend.herokuapp.com/PersonalFeeds/' + obj)
      .then((res) => {
        dispatch({type: "DELETE_FEED_SUCCESS", payload: res})
      })
  }
}

export function loadUsers() {
  return function(dispatch) {
    dispatch({type: "LOAD_USERS"});
    axios.get('https://rss-reader-backend.herokuapp.com/Users')
      .then((res) => {
        dispatch({type: "LOAD_USERS_SUCCESS", payload: res})
      })
  }
}

export function setUser(id, user) {
  var userObj = {id: id, name: user}
  return function(dispatch) {
    dispatch({type: "SET_USER", userObj});
  }
}

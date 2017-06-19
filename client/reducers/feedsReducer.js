import isEmpty from 'lodash/isEmpty';

const initialState = {
  isLoading: false,
  auth: false,
  feed: {},
  user: {}
};

export default( state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOAD_FEEDS':
      return {
        isLoading: true,
        auth: false,
      };
    case 'LOAD_FEEDS_SUCCESS':
      return {
        isLoading: false,
        auth: false,
        feeds: action.payload.data.items,
        feed: action.payload.data.feed
      };
    case 'LOAD_FEEDS_ERROR':
      return {
        isLoading: false,
        auth: false,
      };
    case 'LOAD_USERS_SUCCESS':
      state.users = action.payload.data;
      return JSON.parse(JSON.stringify(state))

    case 'SET_USER':
      state.user = action.userObj;
      state.auth = true;
      return JSON.parse(JSON.stringify(state))

    case 'LOAD_SAVED_FEEDS_SUCCESS':
      state.savedFeeds = action.payload.data;
      return JSON.parse(JSON.stringify(state))

    default: return state;

  }
}

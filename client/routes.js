import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import Feeds from './components/feeds';
import SavedFeeds from './components/feeds/SavedFeeds';

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Feeds} />
    <Route path="signup" component={SignupPage} />
    <Route path="personal_feeds" component={SavedFeeds} />
    <Route path="login" component={LoginPage} />
  </Route>
)

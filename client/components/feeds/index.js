import React from 'react';
import { connect } from 'react-redux';
import { loadFeeds, loadUsers, setUser, saveFeed } from '../../actions/feedActions';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectUsers from './SelectUsers';
import FeedsList from './FeedsList';

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.userClick = this.userClick.bind(this);
    this.saveFeed = this.saveFeed.bind(this);
  }

  componentWillMount() {
    this.props.loadUsers();
    this.props.loadFeeds();
  }

  userClick(e){
    this.props.setUser(e.target.id, e.target.innerText);
  }

  saveFeed(e){
    var obj = {
      "id_user":this.props.user.id,
      "title": this.props.feeds[e.target.id]["title"],
      "link": this.props.feeds[e.target.id]["link"],
      "author": this.props.feeds[e.target.id]["author"],
      "description": this.props.feeds[e.target.id]["description"]
    }

    this.props.saveFeed(obj);
  }

  render() {
    return (
      <div>
        { this.props.feeds && this.props.users && this.props.user ? <FeedsList saveFeed={this.saveFeed} feeds={this.props.feeds}/> : this.props.users? <SelectUsers userClick={this.userClick} users={this.props.users}/> : null  }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    feeds: state.feedsReducer.feeds,
    users: state.feedsReducer.users,
    user: state.feedsReducer.user
  }
};

export default connect(mapStateToProps, {loadFeeds, loadUsers, setUser, saveFeed})(Feeds);

import React from 'react';
import { connect } from 'react-redux';
import { loadSavedFeeds } from '../../actions/feedActions';
import TextFieldGroup from '../common/TextFieldGroup';

class SavedFeeds extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    if(this.props.user){
      this.props.loadSavedFeeds(this.props.user.id);
    }
  }

  render() {
    if(this.props.user){
      const feeds = this.props.feeds;
      var posts = [];
      if (feeds){
        if (feeds.length > 0){
          for (var j = 0; j < feeds.length; j++){
            posts.push(
              <div key={j}>
                <a target="_blank" href={feeds[j]["link"]}>
                  <h3>{feeds[j]["title"]}</h3>
                  <p>{feeds[j]["description"]}</p>
                  <span>{feeds[j]["author"]}</span>
                  <img src={feeds[j]["image"]}></img>
                </a>
              </div>
            );
          }
        }
      }
      if (posts.length > 0 ) {
        return <div>{posts}</div>
      }else{
        return <div>Nenhum feed salvo</div>
      }
    }else{
      return <div>Selecione um usuario primeiro na pagina inicial</div>
    }


  }
}

function mapStateToProps(state) {
  return {
    feeds: state.feedsReducer.savedFeeds,
    user: state.feedsReducer.user
  }
}

export default connect(mapStateToProps, {loadSavedFeeds})(SavedFeeds);

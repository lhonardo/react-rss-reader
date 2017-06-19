import React from 'react';
import { connect } from 'react-redux';
import { loadSavedFeeds, removeFeed } from '../../actions/feedActions';
import TextFieldGroup from '../common/TextFieldGroup';

class SavedFeeds extends React.Component {
  constructor(props) {
    super(props);
    this.removeFeed = this.removeFeed.bind(this);
  }

  componentWillMount() {
    if(this.props.user){
      this.props.loadSavedFeeds(this.props.user.id);
    }
  }

  removeFeed(e){
    e.preventDefault();
    this.props.removeFeed(e.target.id);
  }

  render() {
    if(this.props.user){
      const feeds = this.props.feeds;
      var posts = [];
      if (feeds){
        if (feeds.length > 0){
          for (var j = 0; j < feeds.length; j++){
            posts.push(
              <div className="jumbotron" key={j}>
                <h1>{feeds[j]["title"]}</h1>
                <p>{feeds[j]["description"]}</p>
                <span>{feeds[j]["author"]}</span>
                <img src={feeds[j]["image"]}></img>
                <a className="btn btn-primary btn-lg" role="button" target="_blank" href={feeds[j]["link"]}>Leia mais</a>
                <a id={feeds[j]["id_feed"]} className="btn btn-danger btn-lg pull-right" onClick={ (e) => this.removeFeed(e) } role="button" href="#">Remover feed</a>
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

export default connect(mapStateToProps, {loadSavedFeeds, removeFeed})(SavedFeeds);

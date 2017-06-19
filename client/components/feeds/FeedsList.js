import React from 'react';

class FeedsList extends React.Component {
  render() {
    const feeds = this.props.feeds;

    var posts = [];
    for (var j = 0; j < feeds.length; j++){
      posts.push(
        <div className="jumbotron" key={j}>
          <h1>{feeds[j]["title"]}</h1>
          <img src={feeds[j]["image"]}/>
          <p>{feeds[j]["description"]}</p>
          <p>{feeds[j]["pubDate"]}</p>
          <p>{feeds[j]["author"]}</p>
          <a className="btn btn-primary btn-lg" target="_blank" href={feeds[j]["link"]}>Leia mais</a>
          <a className="btn btn-primary btn-lg pull-right" href="#" id={j} onClick={(e) => this.props.saveFeed(e)}>Salvar este feed</a>
        </div>
      );
    }
    return <div>{posts}</div>;
  }
}
export default FeedsList;

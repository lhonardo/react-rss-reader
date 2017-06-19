import React from 'react';

class FeedsList extends React.Component {
  render() {
    const feeds = this.props.feeds;

    var posts = [];
    for (var j = 0; j < feeds.length; j++){
      posts.push(
        <div key={j}>
          <a target="_blank" href={feeds[j]["link"]}>
            <h3>{feeds[j]["title"]}</h3>
            <p>{feeds[j]["description"]}</p>
            <span>{feeds[j]["pubDate"]}</span>
            <span>{feeds[j]["author"]}</span>
            <img src={feeds[j]["image"]}></img>
          </a>
          <i id={j} onClick={(e) => this.props.saveFeed(e)}>save feed</i>
        </div>
      );
    }
    return <div>{posts}</div>;
  }
}
export default FeedsList;

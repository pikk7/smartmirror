import React, { Component } from "react";
import RedditItem from "./RedditItem";

class RedditInfo extends Component {
  render() {
    let redditItems = this.props.redditData.map((item, id) => {
      return (
        <RedditItem
          key={id}
          title={item.data.title}
          image={
            item.data.thumbnail
              ? item.data.thumbnail
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Reddit_logo_orange.svg/1024px-Reddit_logo_orange.svg.png"
          }
        />
      );
    });
    return <div className="ui grid">{redditItems}</div>;
  }
}
export default RedditInfo;

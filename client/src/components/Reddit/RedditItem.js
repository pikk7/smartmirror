import React, { Component } from "react";

class RedditItem extends Component {
  render() {
    return (
      <div>
        <div className="ui tiny header">{this.props.title}</div>
        <br></br>
      </div>
    );
  }
}

export default RedditItem;

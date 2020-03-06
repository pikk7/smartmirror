import React, { Component } from "react";
import VelocityTransitionGroup from "velocity-react/velocity-transition-group";
import RedditInfo from "./RedditInfo";

const refreshInterval = 60 * 1000;
class Reddit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redditData: undefined,
      redditError: false
    };
  }

  getFrontPageReddit() {
    fetch("http://localhost:9000/redditAPI")
      .then(res => res.text())
      .then(res => JSON.parse(res))
      .then(results => {
        this.setState({
          redditData: results,
          redditError: false
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          redditError: true
        });
      });
  }

  componentDidMount() {
    this.getFrontPageReddit();

    setInterval(() => {
      this.getFrontPageReddit();
    }, refreshInterval);
  }

  componentWillUnmount() {
    clearInterval(this.state.redditData);
  }

  render() {
    return (
      <div>
        <VelocityTransitionGroup
          enter={{ animation: "fadeIn" }}
          leave={{ animation: "fadeOut" }}
        >
          {this.state.redditData ? (
            <RedditInfo redditData={this.state.redditData.data.children} />
          ) : (
            undefined
          )}
        </VelocityTransitionGroup>
        <VelocityTransitionGroup
          enter={{ animation: "fadeIn" }}
          leave={{ animation: "fadeOut" }}
        >
          {this.state.redditError ? (
            <div className="ui huge header">
              Error could not load reddit information, please check logs!
            </div>
          ) : (
            undefined
          )}
        </VelocityTransitionGroup>
      </div>
    );
  }
}
export default Reddit;

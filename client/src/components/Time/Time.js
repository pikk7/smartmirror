import React, { Component } from "react";
import moment from "moment";
import "moment/locale/hu"; // without this line it didn't work
import VelocityTransitionGroup from "velocity-react/velocity-transition-group";

const refreshInterval = 1000;
const timeFormat = "HH:mm:ss";
const dateFormat = "YYYY MMMM Do dddd";
moment.locale("hu");

class Time extends Component {
  constructor() {
    super();
    this.state = {
      time: moment().format(timeFormat),
      date: moment().format(dateFormat)
    };
  }

  componentDidMount() {
    let id = setInterval(() => {
      this.setState({
        time: moment().format(timeFormat),
        date: moment().format(dateFormat)
      });
    }, refreshInterval);
    this.setState({
      id: id
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.id);
  }

  render() {
    return (
      <VelocityTransitionGroup
        enter={{ animation: "fadeIn" }}
        leave={{ animation: "fadeOut" }}
        runOnMount={true}
      >
        <div style={{ fontSize: "72px" }} className="ui huge header">
          {this.state.time}
        </div>
        <div style={{ fontSize: "36px" }} className="ui huge header">
          {this.state.date}
        </div>
      </VelocityTransitionGroup>
    );
  }
}

export default Time;

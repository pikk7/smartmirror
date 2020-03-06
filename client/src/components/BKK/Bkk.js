import React, { Component } from "react";
import VelocityTransitionGroup from "velocity-react/velocity-transition-group";
import BkkInfo from "./BkkInfo";

const example = {
  version: 3,
  status: "OK",
  code: 200,
  text: "OK",
  currentTime: 1582537380280,
  data: {
    list: [],
    outOfRange: false,
    limitExceeded: false,
    references: {
      agencies: {},
      routes: {},
      stops: {},
      trips: {},
      alerts: {}
    },
    class: "listWithReferences"
  }
};

const refreshInterval = 60 * 1000;
class Bkk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bkkError: false,
      bkkData: ""
    };
  }
  callFutarApi() {
    fetch("http://localhost:9000/bkkFutarAPI")
      .then(res => res.text())
      .then(res => JSON.parse(res))
      .then(res => this.setState({ bkkData: res }))
      .catch(err => this.setState({ bkkData: example }));
  }

  componentDidMount() {
    this.callFutarApi();

    setInterval(() => {
      this.callFutarApi();
    }, refreshInterval);
  }

  componentWillUnmount() {
    clearInterval(this.state.bkkData);
  }

  render() {
    // console.log(this.state)
    if (this.state.bkkData) {
      return (
        <div>
          <VelocityTransitionGroup
            enter={{ animation: "fadeIn" }}
            leave={{ animation: "fadeOut" }}
          >
            <BkkInfo bkkData={this.state.bkkData.data} />
          </VelocityTransitionGroup>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default Bkk;

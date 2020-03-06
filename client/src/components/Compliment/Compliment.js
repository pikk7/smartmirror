import React, { Component } from "react";

import VelocityTransitionGroup from "velocity-react/velocity-transition-group";

let refreshInterval = 60 * 1000;

const niceSentences = [
  { date: "any", txt: "Hi gorgeous!" },
  { date: "any", txt: "Hey sexy!" },
  { date: "any", txt: "Tanulj és nem kell többször látni a tanáraidat!" },
  { date: "morning", txt: "How did you sleep?" },
  { date: "morning", txt: "Fésülködve még szexibb vagy!" },
  { date: "morning", txt: "Menj be dolgozni, és lesz pénzed sangriára" },
  { date: "any", txt: "Hey handsome" }
];

class Compliment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      compliment: { date: "any", txt: "Hey handsome" }
    };
  }
  getCompliment() {
    const date = new Date().getHours() < 12 ? "morning" : "night";

    function isOkayDate(element) {
      return element.date === date || element.date === "any";
    }

    let filteredArray = niceSentences.filter(isOkayDate);
    let randomNumber = Math.floor(Math.random() * filteredArray.length);
    this.setState({ compliment: filteredArray[randomNumber] });
  }

  componentDidMount() {
    this.getCompliment();
    setInterval(() => {
      this.getCompliment();
    }, refreshInterval);
  }

  render() {
    return (
      <div>
        <VelocityTransitionGroup
          enter={{ animation: "fadeIn" }}
          leave={{ animation: "fadeOut" }}
        >
          <h1>{this.state.compliment.txt}</h1>
        </VelocityTransitionGroup>
      </div>
    );
  }
}

export default Compliment;

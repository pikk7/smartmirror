import React, { Component } from "react";
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
class Forecast extends Component {
  render() {
    let date = new Date(this.props.date * 1000);
    let year = date.getFullYear();
    let month = addZero(date.getMonth() + 1); //getMonth is zero based;
    let day = addZero(date.getDate());
    let formatted = year + "." + month + "." + day;
    return (
      <div className="ui tiny header">
        <b>{formatted}: </b> {this.props.tempHigh}&deg;C és {this.props.tempLow}
        &deg;C
      </div>
    );
  }
}

export default Forecast;

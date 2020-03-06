import React, { Component } from "react";

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
class BkkInfo extends Component {
  render() {
    //TO_DO éjszakai nem zsír
    if (this.props.bkkData.entry) {
      let data = this.props.bkkData.entry.stopTimes.map((element, index) => {
        let bus = this.props.bkkData.references.trips[element.tripId].routeId;
        var utcSeconds = element.arrivalTime;
        var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
        d.setUTCSeconds(utcSeconds);
        return (
          <div key={index}>
            <b>{this.props.bkkData.references.routes[bus].shortName}:</b>{" "}
            {addZero(d.getHours())}:{addZero(d.getMinutes())}{" "}
          </div>
        );
      });

      return (
        <div id="182es conténer">
          <div>
            {/* this is hungarian text for "Starting bus" */}
            <h1>Induló buszok</h1>
          </div>
          <div>{data}</div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
export default BkkInfo;

import React, { Component } from "react";
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function formatingDate(d) {
  let date = new Date(d);
  let year = date.getFullYear();
  let month = addZero(date.getMonth() + 1); //getMonth is zero based;
  let day = addZero(date.getDate());
  let hour = addZero(date.getHours());
  let minutes = addZero(date.getMinutes());

  return year + "." + month + "." + day + ". " + hour + ":" + minutes;
}
class CalndarItem extends Component {
  static defaultProps = {
    type: "VEVENT",
    params: [],
    start: "2020-07-22T18:00:00.000Z",
    end: "2020-07-26T22:00:00.000Z",
    dtstamp: "2020-03-04T15:12:59.000Z",
    uid:
      "68sjae31cgsmcb9o6kpm6b9kc8rmcbb170rjab9n60q64c1k6kq34dhncc@google.com",
    created: "2020-02-10T20:04:08.000Z",
    description: "",
    lastmodified: "2020-02-10T20:04:08.000Z",
    location: "",
    sequence: "0",
    status: "CONFIRMED",
    summary: "Vk gyerek tábor",
    transparency: "OPAQUE"
  };

  startIsNear() {
    //1 hour is the near
    return (
      new Date(this.props.data.start).getTime() - new Date().getTime() > 3600000
    );
  }

  render() {
    // console.log(this.props.data)
    return (
      <div style={{ color: this.startIsNear() ? "white" : "red" }}>
        <div>{this.props.data.summary}</div>

        <div>Helyszín: {this.props.data.location}</div>
        <div>Kezdés: {formatingDate(this.props.data.start)}</div>
        <div>Vége: {formatingDate(this.props.data.end)}</div>
        <br></br>
      </div>
    );
  }
}
export default CalndarItem;

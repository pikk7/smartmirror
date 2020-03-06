import React, { Component } from "react";
import CalndarItem from "./CalndarItem";

let refreshInterval = 60 * 60 * 1000;

function pastDelete(a) {
  let current = new Date();
  // current.setDate(current.getDay()-5)
  return new Date(a.start).getTime() >= current.getTime();
}

function custom_sort(a, b) {
  return new Date(a.start).getTime() - new Date(b.start).getTime();
}

const errorData = [
  {
    type: "VEVENT",
    params: [],
    start: "2021-12-08T18:00:00.000Z",
    end: "2021-12-09T01:00:00.000Z",
    dtstamp: "2020-03-04T15:17:19.000Z",
    organizer: { params: [], val: "mailto:istvan@farmo.si" },
    uid: "07DC0A1530D9845ACBD8834C9CDE37CAD2B2B7D4",
    attendee: { params: [], val: "mailto:durza13@gmail.com" },
    created: "2012-11-02T01:57:02.000Z",
    description: "Keep Wiseman Alive ‘13↵",
    lastmodified: "2012-11-02T09:38:07.000Z",
    location: "Club 202",
    sequence: "0",
    status: "CONFIRMED",
    summary: "kamu adat2",
    transparency: "OPAQUE"
  },
  {
    type: "VEVENT",
    params: [],
    start: "2021-02-19T15:00:00.000Z",
    end: "2021-02-19T16:30:00.000Z",
    dtstamp: "2020-03-04T15:17:19.000Z",
    uid: "CSVConvertc04f5bb3761732db0dbc36119d551b9c",
    created: "1900-01-01T12:00:00.000Z",
    description: "Ásványi Tibor dr.",
    lastmodified: "2020-02-10T09:21:51.000Z",
    location: "D 0-821 Bolyai János terem",
    sequence: "0",
    status: "CONFIRMED",
    summary: "kamu adat1",
    transparency: "OPAQUE"
  }
];

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      calendarData: null
    };
  }
  componentDidMount() {
    this.getCalendar();

    setInterval(() => {
      this.getCalendar();
    }, refreshInterval);
  }

  getCalendar() {
    fetch("http://localhost:9000/calendarAPI")
      .then(res => res.text())
      .then(res => JSON.parse(res))
      .then(res => this.setState({ calendarData: res }))
      .catch(err => this.setState({ calendarData: errorData }));
  }

  render() {
    if (this.state.calendarData) {
      //  console.log(this.state.calendarData);
      let dataSort = this.state.calendarData.sort(custom_sort);
      let pastDeleteData = dataSort.filter(pastDelete);
      let calendarItems = pastDeleteData.map((data, index) => {
        //  console.log(data)
        return <CalndarItem key={index} data={data} />;
      });
      return <div>{calendarItems.slice(0, 5)}</div>;
    } else {
      return <div>Loading</div>;
    }
  }
}

export default Calendar;

import React, { Component } from "react";
import VelocityTransitionGroup from "velocity-react/velocity-transition-group";
import WeatherInfo from "./WeatherInfo";

const example = {
  location: {
    woeid: 2502265,
    city: "Sunnyvale",
    region: " CA",
    country: "United States",
    lat: 37.371609,
    long: -122.038254,
    timezone_id: "America/Los_Angeles"
  },
  current_observation: {
    wind: {
      chill: 59,
      direction: 165,
      speed: 8.7
    },
    atmosphere: {
      humidity: 76,
      visibility: 10,
      pressure: 29.68
    },
    astronomy: {
      sunrise: "7:23 am",
      sunset: "5:7 pm"
    },
    condition: {
      text: "Scattered Showers",
      code: 39,
      temperature: 60
    },
    pubDate: 1546992000
  },
  forecasts: [
    {
      day: "Tue",
      date: 1546934400,
      low: 52,
      high: 61,
      text: "Rain",
      code: 12
    },
    {
      day: "Wed",
      date: 1547020800,
      low: 51,
      high: 62,
      text: "Scattered Showers",
      code: 39
    },
    {
      day: "Thu",
      date: 1547107200,
      low: 46,
      high: 60,
      text: "Mostly Cloudy",
      code: 28
    },
    {
      day: "Fri",
      date: 1547193600,
      low: 48,
      high: 61,
      text: "Showers",
      code: 11
    },
    {
      day: "Sat",
      date: 1547280000,
      low: 47,
      high: 62,
      text: "Rain",
      code: 12
    },
    {
      day: "Sun",
      date: 1547366400,
      low: 48,
      high: 58,
      text: "Rain",
      code: 12
    },
    {
      day: "Mon",
      date: 1547452800,
      low: 47,
      high: 58,
      text: "Rain",
      code: 12
    },
    {
      day: "Tue",
      date: 1547539200,
      low: 46,
      high: 59,
      text: "Scattered Showers",
      code: 39
    },
    {
      day: "Wed",
      date: 1547625600,
      low: 49,
      high: 56,
      text: "Rain",
      code: 12
    },
    {
      day: "Thu",
      date: 1547712000,
      low: 49,
      high: 59,
      text: "Scattered Showers",
      code: 39
    }
  ]
};

const refreshInterval = 60 * 1000;
class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherError: false,
      weatherData: "",
      done: false
    };
  }

  callWeatherApi() {
    fetch("http://localhost:9000/weatherAPI")
      .then(res => res.text())
      .then(res => JSON.parse(res))
      .then(res => this.setState({ weatherData: res }))
      .catch(err => this.setState({ weatherData: example }));
  }

  componentDidMount() {
    this.callWeatherApi();
    setInterval(() => {
      this.callWeatherApi();
    }, refreshInterval);
  }

  componentWillUnmount() {
    clearInterval(this.state.weatherData);
  }

  render() {
    if (this.state.weatherData.current_observation) {
      return (
        <div>
          <VelocityTransitionGroup
            enter={{ animation: "fadeIn" }}
            leave={{ animation: "fadeOut" }}
          >
            <WeatherInfo
              forecasts={this.state.weatherData.forecasts}
              temp={
                this.state.weatherData.current_observation.condition.temperature
              }
              city={this.state.weatherData.location.city}
              current_observation={this.state.weatherData.current_observation}
            />
          </VelocityTransitionGroup>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default Weather;

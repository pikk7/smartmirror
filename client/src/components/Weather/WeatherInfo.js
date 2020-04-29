import React, { Component } from "react";
import Forecast from "./Forecast";
import SnowStorm from "react-snowstorm";

import {WiDayShowers,
  WiHot,
  WiDayHail,
  WiDaySunnyOvercast,
  WiMoonWaningCrescent4,
  WiDaySunny,
  WiNightClear,
  WiNightPartlyCloudy,
  WiSmoke,
  WiNightAltCloudy,
  WiDayHaze,
  WiDaySnowWind,
  WiNightStormShowers,
  WiNightShowers,
  WiDaySnowThunderstorm,
  WiStrongWind,
  WiCloud,
  WiDust,
  WiSleet,
  WiDayCloudy,
  WiHail,
  WiFog,
  WiNightSnowThunderstorm,
  WiDaySnow,
  WiTornado,
  WiBarometer,
  WiHurricane,
  WiStormShowers,
  WiThunderstorm,
  WiDayThunderstorm,
  WiRainMix,
  WiDayRainMix,
  WiDaySleetStorm,
  WiRain,
  WiShowers,
  WiSnow,
  WiNightSleetStorm,
  WiSnowflakeCold} from "weather-icons-react";
  
let code = "32";
let isSnowing = false;
let isRaining = false;
let isStrong = false;

const conditions = [
  { code: "0", text: "tornado", icon: <WiTornado size={32} color="#FFFFFF" /> },
  {
    code: "1",
    text: "tropical storm",
    icon: <WiStormShowers size={32} color="#FFFFFF" />
  },
  {
    code: "2",
    text: "hurricane",
    icon: <WiHurricane size={32} color="#FFFFFF" />
  },
  {
    code: "3",
    text: "severe thunderstorms",
    icon: <WiThunderstorm size={32} color="#FFFFFF" />
  },
  {
    code: "4",
    text: "thunderstorms",
    icon: <WiDayThunderstorm size={32} color="#FFFFFF" />
  },
  {
    code: "5",
    text: "mixed rain and snow",
    icon: <WiDayRainMix size={32} color="#FFFFFF" />
  },
  {
    code: "6",
    text: "mixed rain and sleet",
    icon: <WiDaySleetStorm size={32} color="#FFFFFF" />
  },
  {
    code: "7",
    text: "mixed snow and sleet",
    icon: <WiNightSleetStorm size={32} color="#FFFFFF" />
  },
  {
    code: "8",
    text: "freezing drizzle",
    icon: <WiSnowflakeCold size={32} color="#FFFFFF" />
  },
  {
    code: "9",
    text: "drizzle",
    icon: <WiSnowflakeCold size={32} color="#FFFFFF" />
  },
  {
    code: "10",
    text: "freezing rain",
    icon: <WiRainMix size={32} color="#FFFFFF" />
  },
  {
    code: "11",
    text: "showers",
    icon: <WiShowers size={32} color="#FFFFFF" />
  },
  { code: "12", text: "rain", icon: <WiRain size={32} color="#FFFFFF" /> },
  {
    code: "13",
    text: "snow flurries",
    icon: <WiSnow size={32} color="#FFFFFF" />
  },
  {
    code: "14",
    text: "light snow showers",
    icon: <WiDaySnow size={32} color="#FFFFFF" />
  },
  {
    code: "15",
    text: "blowing snow",
    icon: <WiNightSnowThunderstorm size={32} color="#FFFFFF" />
  },
  { code: "16", text: "snow", icon: <WiSnow size={32} color="#FFFFFF" /> },
  { code: "17", text: "hail", icon: <WiHail size={32} color="#FFFFFF" /> },
  { code: "18", text: "sleet", icon: <WiSleet size={32} color="#FFFFFF" /> },
  { code: "19", text: "dust", icon: <WiDust size={32} color="#FFFFFF" /> },
  { code: "20", text: "foggy", icon: <WiFog size={32} color="#FFFFFF" /> },
  { code: "21", text: "haze", icon: <WiDayHaze size={32} color="#FFFFFF" /> },
  { code: "22", text: "smoky", icon: <WiSmoke size={32} color="#FFFFFF" /> },
  {
    code: "23",
    text: "blustery",
    icon: <WiStrongWind size={32} color="#FFFFFF" />
  },
  {
    code: "24",
    text: "windy",
    icon: <WiStrongWind size={32} color="#FFFFFF" />
  },
  {
    code: "25",
    text: "cold",
    icon: <WiSnowflakeCold size={32} color="#FFFFFF" />
  },
  { code: "26", text: "cloudy", icon: <WiCloud size={32} color="#FFFFFF" /> },
  {
    code: "27",
    text: "mostly cloudy (night)",
    icon: <WiNightAltCloudy size={32} color="#FFFFFF" />
  },
  {
    code: "28",
    text: "mostly cloudy (day)",
    icon: <WiDayCloudy size={32} color="#FFFFFF" />
  },
  {
    code: "29",
    text: "partly cloudy (night)",
    icon: <WiNightPartlyCloudy size={32} color="#FFFFFF" />
  },
  {
    code: "30",
    text: "partly cloudy (day)",
    icon: <WiDayCloudy size={32} color="#FFFFFF" />
  },
  {
    code: "31",
    text: "clear (night)",
    icon: <WiNightClear size={32} color="#FFFFFF" />
  },
  { code: "32", text: "sunny", icon: <WiDaySunny size={32} color="#FFFFFF" /> },
  {
    code: "33",
    text: "fair (night)",
    icon: <WiMoonWaningCrescent4 size={32} color="#FFFFFF" />
  },
  {
    code: "34",
    text: "fair (day)",
    icon: <WiDaySunnyOvercast size={32} color="#FFFFFF" />
  },
  {
    code: "35",
    text: "mixed rain and hail",
    icon: <WiDayHail size={32} color="#FFFFFF" />
  },
  { code: "36", text: "hot", icon: <WiHot size={32} color="#FFFFFF" /> },
  {
    code: "37",
    text: "isolated thunderstorms",
    icon: <WiDayThunderstorm size={32} color="#FFFFFF" />
  },
  {
    code: "38",
    text: "scattered thunderstorms",
    icon: <WiDayThunderstorm size={32} color="#FFFFFF" />
  },
  {
    code: "39",
    text: "scattered showers (day)",
    icon: <WiDayShowers size={32} color="#FFFFFF" />
  },
  {
    code: "40",
    text: "heavy rain",
    icon: <WiRain size={32} color="#FFFFFF" />
  },
  {
    code: "41",
    text: "scattered snow showers (day)",
    icon: <WiDaySnowWind size={32} color="#FFFFFF" />
  },
  {
    code: "42",
    text: "heavy snow",
    icon: <WiDaySnowThunderstorm size={32} color="#FFFFFF" />
  },
  {
    code: "43",
    text: "blizzard",
    icon: <WiDaySnowThunderstorm size={32} color="#FFFFFF" />
  },
  {
    code: "44",
    text: "not available",
    icon: <WiBarometer size={32} color="#FFFFFF" />
  },
  {
    code: "45",
    text: "scattered showers (night)",
    icon: <WiNightStormShowers size={32} color="#FFFFFF" />
  },
  {
    code: "46",
    text: "scattered snow showers (night)",
    icon: <WiNightShowers size={32} color="#FFFFFF" />
  },
  {
    code: "47",
    text: "scattered thundershowers",
    icon: <WiThunderstorm size={32} color="#FFFFFF" />
  }
];

const rainCode = [0, 1,  2,  3,  4,  5,  6,  7,  10,  11,  12,  35,  37,  38,  39,  40,  45,  47];
const snowCode = [5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 16, 35, 41, 42, 43, 46];
const strong = [0, 1, 2, 3, 4, 11, 12, 15, 40, 41, 2, 43, 47];

class WeatherInfo extends Component {
  render() {
    if (this.props) {
      code = this.props.current_observation.condition.code;
      //Make faster "wind" and it loooks like bigger thunder
      isSnowing = snowCode.includes(code);
      isRaining = rainCode.includes(code);
      isStrong = strong.includes(code);

      const speed = isStrong ? 16 : 8;
      const speed2 = isStrong ? 10 : 5;
      let forecastItems = this.props.forecasts.map((data, index) => {
        return (
          <Forecast
            key={index}
            tempHigh={data.high}
            tempLow={data.low}
            date={data.date}
            code={data.text}
          />
        );
      });
      return (
        <div>
          <h1> Jelenlegi hőmérséklet {this.props.city}en </h1>
          <h2>
            {this.props.temp}&deg;C {conditions[code].icon}
          </h2>
          {isSnowing ? (
            <div>
              {" "}
              <SnowStorm
                vMaxY={speed2}
                vMaxX={speed}
                freezeOnBlur={false}
                followMouse={false}
                animationInterval={50}
              />{" "}
              <br></br>
            </div>
          ) : (
            <div>
              <br></br>{" "}
            </div>
          )}
          {isRaining ? (
            <SnowStorm
              vMaxY={speed2}
              vMaxX={speed}
              freezeOnBlur={false}
              snowColor="#0000ff"
              followMouse={false}
              snowStick={false}
              animationInterval={50}
            />
          ) : (
            <div> </div>
          )}
          <h2>Előrejelzés:</h2>
          {forecastItems}
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default WeatherInfo;

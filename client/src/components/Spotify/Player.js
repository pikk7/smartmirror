import React from "react";
import "./Player.css";
import none from "./none.png";

const Player = props => {
  let backgroundStyles;
  try {
    backgroundStyles = {
      backgroundImage: `url(${props.item.album.images[0].url})`
    };
  } catch (error) {
    backgroundStyles = {
      backgroundImage: none
    };
  }

  const progressBarStyles = {
    width: (props.progress_ms * 100) / props.item.duration_ms + "%"
  };
  try {
    return (
      <div className="main-wrapper">
        <div className="now-playing__img">
          <img alt="album" src={props.item.album.images[0].url} />
        </div>
        <div className="now-playing__side">
          <div className="now-playing__name">{props.item.name}</div>
          <div className="now-playing__artist">
            {props.item.artists[0].name}
          </div>
          <div className="now-playing__status">
            {props.is_playing ? "Playing" : "Paused"}
          </div>
          <div className="progress">
            <div className="progress__bar" style={progressBarStyles} />
          </div>
        </div>
        <div className="background" style={backgroundStyles} />{" "}
      </div>
    );
  } catch (error) {
    //'Nem megy senki' means nobody going in hungarian
    return (
      <div className="main-wrapper">
        <div className="now-playing__img">
          <none></none>
        </div>
        <div className="now-playing__side">
          <div className="now-playing__name">{props.item.name}</div>
          <div className="now-playing__artist">Nem megy semmi</div>
          <div className="now-playing__status">
            {props.is_playing ? "Playing" : "Paused"}
          </div>
          <div className="progress">
            <div className="progress__bar" style={progressBarStyles} />
          </div>
        </div>
        <div className="background" style={backgroundStyles} />{" "}
      </div>
    );
  }
};

export default Player;

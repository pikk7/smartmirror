import React, { Component } from "react";
import * as $ from "jquery";
import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes
} from "../../config/config_spotify";
import hash from "./hash";
import Player from "./Player";
import "./Spotify.css";

let refreshInterval = 1000;

class Spotify extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });

      //ezzel oldom meg a spotify frssülését
      setInterval(() => {
        this.getCurrentlyPlaying(_token);
      }, refreshInterval);
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        // console.log("data", data);
        try {
          this.setState({
            item: data.item,
            is_playing: data.is_playing,
            progress_ms: data.progress_ms
          });
        } catch (err) {
          this.setState({
            item: { album: "nincs" },
            is_playing: "Paused",
            progress_ms: 0
          });
        }
      },
      error: errorData => {
        console.log(errorData);
      }
    });
  }

  render() {
    return (
      <div>
        {!this.state.token && (
          <a
            className="btn btn--loginApp-link"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>
        )}
        {this.state.token && (
          <Player
            item={this.state.item}
            is_playing={this.state.is_playing}
            progress_ms={this.state.progress_ms}
          />
        )}
      </div>
    );
  }
}

export default Spotify;

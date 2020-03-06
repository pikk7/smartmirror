import React, { Component } from "react";

import Reddit from "../Reddit/Reddit";
import Compliment from "../Compliment/Compliment";
import Weather from "../Weather/Weather";
import Spotify from "../Spotify/Spotify";
import Time from "../Time/Time";
import Bkk from "../BKK/Bkk";
import { Container, Row, Col } from "react-grid-system";
import Calendar from "../Calendar/Calendar";

class MirrorState extends Component {
  render() {
    // Styling

    return (
      <Container style={{ textAlign: "center" }} fluid>
        <Row align="start">
          <Col></Col>
          <Col justify="center">
            <Time />
          </Col>
          <Col></Col>
        </Row>
        <br></br>
        <Row align="center">
          <Col>
            <Spotify />
            <Calendar />
          </Col>

          <Col>
            <Reddit />
          </Col>

          <Col>
            <Weather />
            <Bkk />
          </Col>
        </Row>

        <Row align="end">
          <Col></Col>

          <Col justify="center">
            <Compliment />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default MirrorState;

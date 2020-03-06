import React, { Component } from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";

import theming from "../../services/theming";

import MirrorState from "../MirrorState";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: theming.defaultTheme
    };
  }

  render() {
    const { theme } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MirrorState />
      </MuiThemeProvider>
    );
  }
}

export default App;

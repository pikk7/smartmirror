import React from "react";

import ReactDOM from "react-dom";

import MirrorState from "./MirrorState";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<MirrorState />, div);

  ReactDOM.unmountComponentAtNode(div);
});

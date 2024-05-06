import React from "react";
import ReactDOM from "react-dom";

const el = document.getElementById("root");
const header = React.createElement("h1", null, "Hello world");

ReactDOM.render(header, el);

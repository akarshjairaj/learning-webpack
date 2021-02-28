import React from "react";
import { render } from "react-dom";
import App from "./components/App";

window.React = React;

const rootElement = document.getElementById("root");

render(<App />, rootElement);

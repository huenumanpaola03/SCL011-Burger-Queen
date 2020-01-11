import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./global.css";
//import Init from "./components/Init";
// import Tables from "./components/tables";
import Order from "./components/order";

const container = document.getElementById("root");

ReactDOM.render(<Order />, container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

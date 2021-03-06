import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";

import "./global.css";
import Opp from './components/App';


const container = document.getElementById("root");

ReactDOM.render(<Opp />, container);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

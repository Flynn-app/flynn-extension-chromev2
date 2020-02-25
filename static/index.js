import React from "react";
import ReactDOM from "react-dom";
import App from "../app/App";
import "./index.css";

ReactDOM.render(<App />, document.querySelector("#root"));

// const showContent = () => {
//   document.querySelectorAll('.loader').forEach( wave => {
//     wave.style.display = "none";
//   } )
//   document.getElementById('save').style.display = "";
// }

// setTimeout(showContent, 2000);

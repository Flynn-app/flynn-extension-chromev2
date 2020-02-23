import React from "react";
import ReactDOM from "react-dom";
import App from "../app/App";
import "./index.css";

// import Mercury from '@postlight/mercury-parser';

// const buttonMercury = document.getElementById("mercuryButton");
// buttonMercury.addEventListener("click", (event) => {

  // buttonMercury.innerHTML = '<div class="spinner-border text-light" role="status"><span class="sr-only">Loading...</span></div>';
  // buttonMercury.style.opacity = '0.5';

// console.log("START")

// const ENV = {
//   SERVER_ADDRESS: 'https://127.0.0.1:3000',
// }

// // function fetchData() {
// //   // const url = window.location.href;
// //   // return {
// //   //   url: url
// //   // }
// //   var url = chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
// //     var url = tabs[0].url;
// //     });
// //   return {
// //     url: url
// //   }
// // };

// const cors = 'https://cors-anywhere.herokuapp.com/';
// let targetSite = chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//     var url = tabs[0].url;

// const urlTarget = `${cors}${targetSite}`;

// console.log("GET URL")

// // const extractContent = (html) => {
// //   return (new DOMParser).parseFromString(html, "text/html") .
// //       documentElement . textContent;
// // }

// const sendData = (data) => {
//   const test = data ;
//   const url = `${ENV['SERVER_ADDRESS']}/api/v1/audios`;
//     fetch(url, {
//       method: 'POST',
//       headers: { "Content-Type": "application/json",
//                  "Accept": "application/json"
//        },
//       body: JSON.stringify({ "audio": { "title": `${data.title}`,
//                                         "text_html": `${data.content}`,
//                                         "text_url": `${targetSite}}`
//       }})
//     })
//       // .then(response => response.json())
//       // .then(rep => redirect(rep.id))
// }

// console.log("SEND TO FLYNN")

// Mercury.parse(urlTarget).then(result => sendData(result));

ReactDOM.render(<App />, document.querySelector("#root"));

import Mercury from '@postlight/mercury-parser';

// const buttonMercury = document.getElementById("mercuryButton");
// buttonMercury.addEventListener("click", (event) => {

  // buttonMercury.innerHTML = '<div class="spinner-border text-light" role="status"><span class="sr-only">Loading...</span></div>';
  // buttonMercury.style.opacity = '0.5';

console.log("START")

const ENV = {
  SERVER_ADDRESS: 'http://127.0.0.1:3000',
}

// function fetchData() {
//   var toto =chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
//      function(tabs){
//         tabs[0].url
//      }
//   );
// };

// const cors = 'https://cors-anywhere.herokuapp.com/';
// let targetSite = fetchData();
// const urlTarget = `${cors}${targetSite}`;

// console.log("GET URL")

// const extractContent = (html) => {
//   return (new DOMParser).parseFromString(html, "text/html") .
//       documentElement . textContent;
// }

const sendData = (data) => {
  const test = data ;
  const url = `${ENV['SERVER_ADDRESS']}/api/v1/audios`;
    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json",
                 "Accept": "application/json"
       },
      body: JSON.stringify({ "audio": { "title": `${data.title}`,
                                        "text_html": `${data.content}`,
                                        "text_url": ``
      }})
    }).then(response => response.json())
      // .then(rep => redirect(rep.id))
}

console.log("SEND TO FLYNN")
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      // alert(tabs[0].url);
      Mercury.parse(tabs[0].url).then(result => sendData(result));
   }
);

// })

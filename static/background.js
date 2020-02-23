import Mercury from '@postlight/mercury-parser';


const ENV = {
  SERVER_ADDRESS: 'http://127.0.0.1:3000',
}

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
  function(tabs){
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
                                            "text_url": `${tabs[0].url}`
          }})
        }).then(response => response.json())
  }
      Mercury.parse(tabs[0].url).then(result => sendData(result));
   }
);

// })

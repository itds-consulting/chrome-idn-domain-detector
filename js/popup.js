  function getCurrentTab(){
    return new Promise(function(resolve, reject){
      chrome.tabs.query({
        active: true,               // Select active tabs
        lastFocusedWindow: true     // In the current window
      }, function(tabs) {
        resolve(tabs[0]);
      });
    });
  }
  getCurrentTab().then(function(tab){
    document.getElementById('url').textContent=tab.url;
  });

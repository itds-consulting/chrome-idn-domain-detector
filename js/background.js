var idnWarningPath = {
      "16": "images/warning-16.png",
      "24": "images/warning-24.png",
      "32": "images/warning-32.png",
      "64": "images/warning-64.png",
      "128": "images/warning-128.png",
      "256": "images/warning-256.png",
      "512": "images/warning-512.png"
    };

var idnGreyPath = {
      "16": "images/grey-16.png",
      "24": "images/grey-24.png",
      "32": "images/grey-32.png",
      "64": "images/grey-64.png",
      "128": "images/grey-128.png",
      "256": "images/grey-256.png",
      "512": "images/grey-512.png"
    };

function detectIDN(url) {
  return url !== 'undefined' &&
         url.length >= 1 &&
         url.match('.*(xn--).*');
}

chrome.tabs.onUpdated.addListener(function(tab_id, info, tab) {
  let isIDN = detectIDN(tab.url);
  chrome.pageAction.setIcon({
    tabId: tab_id,
    path: isIDN ? idnWarningPath : idnGreyPath
  });
  chrome.pageAction.setTitle({
    tabId: tab_id,
    title: isIDN ? "IDN Domain Detected" : "No IDN detected"
  });
  if(isIDN) { chrome.pageAction.show(tab_id); }
});

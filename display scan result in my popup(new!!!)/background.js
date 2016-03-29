var title;
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  if(message.method == 'setTitle')
  {title = message.title;}
  //localStorage["data"]=request.data;}
  else if(message.method == 'getTitle')
  { sendResponse(title);}
});
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript( {file: "d3.v3.min.js"});
});

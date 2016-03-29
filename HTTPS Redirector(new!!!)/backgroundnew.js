(function () {
  var hostname;
  var websites = localStorage.websites ? JSON.parse(localStorage.websites) : {};
  var parsing = function (url) {
    var element = document.createElement('a');
    element.href = url;
    hostname = element.hostname;
  };
  
  
  //Fired when a request is about to occur.
  chrome.webRequest.onBeforeRequest.addListener(function (details) {
    parsing(details.url);
     return {
        redirectUrl: details.url.replace('http:', 'https:')
    };
  }, {
    types: ['main_frame'],
    urls: ['http://*/*']
  }, ['blocking']);

})();

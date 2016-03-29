 
   function local(details) {
     var url = details.url.replace(/^http/, "https");
     return {redirectUrl: url};
   }
 
 
 
 /* Configuration for the Badge to indicate "ENABLED" state */
var enabledBadgeSpec = {
    text: " ON ",
    color: [0, 255, 0, 255]
};
/* Configuration for the Badge to indicate "DISABLED" state */
var disabledBadgeSpec = {
    text: "OFF",
    color: [255, 0, 0, 100]
};


/* Return whether the extension is currently enabled or not */
function isEnabled() {
    var active = localStorage.getItem("active");
    return (active && (active == "true")) ? true : false;
}

/* Store the current state (enabled/disabled) of the extension
 * (This is necessary because non-persistent background pages (event-pages)
 *  do not persist variable values in 'window') */
function storeEnabled(enabled) {
    localStorage.setItem("active", (enabled) ? "true" : "false");
}

/* Set the state (enabled/disabled) of the extension */
function setState(enabled) {
    var badgeSpec = (enabled) ? enabledBadgeSpec : disabledBadgeSpec;
    var ba = chrome.browserAction;
    ba.setBadgeText({ text: badgeSpec.text });
    ba.setBadgeBackgroundColor({ color: badgeSpec.color });
    storeEnabled(enabled);
    if (enabled) {
		chrome.webRequest.onBeforeRequest.addListener(local,
   {urls: ["http://*/*"]},
   ["blocking"]
 );
        //chrome.tabs.onUpdated.addListener(localhostListener);
        //console.log("Activated... :)");
    } else {
		chrome.webRequest.onBeforeRequest.removeListener(local,
   {urls: ["http://*/*"]},
   ["blocking"]
 );
        //chrome.tabs.onUpdated.removeListener(localhostListener);
        //console.log("Deactivated... :(");
    }
}

/* When the URL of a tab is updated, check if the domain is 'localhost'
 * and redirect 'http' to 'https' */
var regex = /^http(:\/\/localhost(?::[0-9]+)?(?:\/.*)?)$/i;
function localhostListener(tabId, info, tab) {
    if (info.url && regex.test(info.url)) {
        var newURL = info.url.replace(regex, "https$1");
        chrome.tabs.update(tabId, { url: newURL });
        console.log("Tab " + tabId + " is being redirected to: " + newURL);
    }
}

/* Listen for 'browserAction.onClicked' events and toggle the state  */
chrome.browserAction.onClicked.addListener(function() {
    setState(!isEnabled());
});

/* Initially setting the extension's state (upon load) */
setState(isEnabled());
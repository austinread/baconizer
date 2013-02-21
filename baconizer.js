chrome.browserAction.onClicked.addListener(baconify);

function baconify() {
    chrome.tabs.executeScript(null, { file: "content-script.js" });
}
//create right click menu items
chrome.contextMenus.create({ "title": "Baconize this Page", "id": "pageItem" });

//to be used for baconizing single images on the page in future updates
//chrome.contextMenus.create({ "title": "Baconize this Image", "id" : "singleItem" , "contexts" : ["image"]})

//event listeners
chrome.browserAction.onClicked.addListener(baconify);
chrome.contextMenus.onClicked.addListener(contextBaconify);

function baconify() {
    chrome.tabs.executeScript(null, { file: "content-script.js" });
}
function contextBaconify(info) {
    if (info.menuItemId == "pageItem") {
        chrome.tabs.executeScript(null, { file: "content-script.js" });
    }
}
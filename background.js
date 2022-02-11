
function text(tab) {
    console.log("hello text");
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {message: "save_position"});
        });
  }
  chrome.contextMenus.create({
    title: "Save Position",
    onclick:text
  });
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message==="screenshot") {
      chrome.tabs.captureVisibleTab(null, null, function(dataUrl) {
        console.log(dataUrl);
        sendResponse({ response: dataUrl });
    });
    }
    return true
});



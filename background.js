
function text(tab) {
    console.log("hello text");
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {message: "save_position"});
        });
  }
  chrome.contextMenus.create({
    title: "Text",
    onclick:text
  });



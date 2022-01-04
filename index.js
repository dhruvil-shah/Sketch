function erase() {
    console.log("erased called");
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {message: "erase"});
});
}
  
function pen1() {
  console.log("pen1 called");
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
  var activeTab = tabs[0];
  chrome.tabs.sendMessage(activeTab.id, {message: "pen1"});
});
}

  function pen2() {
    console.log("pen2 called");
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {message: "pen2"});
});
}

function pen3() {
    console.log("pen3 called");
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {message: "pen3"});
});
}

function pen4() {
    console.log("pen4 called");
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {message: "pen4"});
    });
    }
function color(){
    console.log("color called");
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {message: "color",value:document.getElementById('color').value});
    });
}

  document.getElementById("erase").addEventListener("click", erase);


  document.getElementById("pen1").addEventListener("click", pen1);
  document.getElementById("pen2").addEventListener("click", pen2);
  document.getElementById("pen3").addEventListener("click", pen3);
  document.getElementById("pen4").addEventListener("click", pen4);
  document.getElementById("apply").addEventListener("click", color);
  
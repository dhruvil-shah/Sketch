function erase() {
    console.log("erased called");
    document.getElementById('no_erase').style['display']="inline";
    document.getElementById('erase').style['display']="none";
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {message: "erase"});
   });
}

function noerase() {
  console.log("noerased called");
  document.getElementById('no_erase').style['display']="none";
  document.getElementById('erase').style['display']="inline";
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
  var activeTab = tabs[0];
  chrome.tabs.sendMessage(activeTab.id, {message: "no_erase"});
 });
}
  document.getElementById("erase").addEventListener("click", erase);
  document.getElementById("no_erase").addEventListener("click", noerase);

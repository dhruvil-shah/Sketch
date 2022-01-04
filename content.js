console.log('sketch blah');

let eraseEnable = false;
var s = function(sketch) {
  sketch.setup = function() {
    document.body.style['userSelect'] = 'none';
    let h = document.body.scrollHeight;
    let w=document.documentElement.scrollWidth;
    let c = sketch.createCanvas(w, h);
    c.position(0, 0);
    c.style('pointer-events','none');
    sketch.clear();
  };

  sketch.draw = function() {
    sketch.stroke(10);
    // sketch.background(100);
    sketch.strokeWeight(1);
    sketch.smooth(10);
    if (sketch.mouseIsPressed) {
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    }
  };

  sketch.toggleErase=function() {
    sketch.erase();
  }
  sketch.toggleErase1=function(){
    sketch.noErase();
  }
};


var myp5 = new p5(s);
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    if( request.message === "erase" ) {
       console.log("Recieved Erase");
       myp5.toggleErase();
         }
    else if(request.message==="no_erase"){
      console.log("No Erase Recieved");
      myp5.toggleErase1();
      
    }
  }
);
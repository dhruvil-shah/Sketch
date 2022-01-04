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
    sketch.strokeWeight(sketch.size!=null ?sketch.size:1);
    sketch.smooth(10);
    if (sketch.mouseIsPressed) {
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    }
  };

  sketch.toggleErase=function() {
    sketch.erase();
  }
  sketch.pen1=function(){
    sketch.noErase();
    sketch.size=1;
    sketch.draw();
  }
  sketch.pen2=function(){
    sketch.noErase();
    sketch.size=5;
    sketch.draw();
  }

  sketch.pen3=function(){
    sketch.noErase();
    sketch.size=10;
    sketch.draw();
  }

  sketch.pen4=function(){
    sketch.noErase();
    sketch.size=20;
    sketch.draw();
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
    else if(request.message==="pen1"){
      console.log("pen1");
      myp5.pen1();
    }
    else if(request.message==="pen2"){
      console.log("pen2");
      myp5.pen2();
    }
    else if(request.message==="pen3"){
      console.log("pen3");
      myp5.pen3();
    }
    else if(request.message==="pen4"){
      console.log("pen4");
      myp5.pen4();
    }
  }
);
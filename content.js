
var cursor_x = -1;
var cursor_y = -1;


console.log('sketch blah');
let eraseEnable = false;
var s = function(sketch) {
  sketch.setup = function() {
    document.body.style['userSelect'] = "none";
    let h = document.body.scrollHeight;
    let w=document.documentElement.scrollWidth;
    let c = sketch.createCanvas(w, h);
    c.position(0, 0);
    c.style('pointer-events','none');
    sketch.clear();
  };

  sketch.mouseClicked=(e)=>{
    const scrollTop=document.documentElement.scrollTop;
    const target = e.target;
    const rect = target.getBoundingClientRect();
    cursor_x= e.clientX ;
    cursor_y= e.clientY +scrollTop;
    console.log(scrollTop);
    console.log(e);
    console.log("new");
  }

  sketch.draw = function() {
    sketch.strokeWeight(sketch.size!=null ?sketch.size:1);
    sketch.smooth(10);
    if (sketch.mouseIsPressed) {
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    }
  };
  
  sketch.toggleErase=function() {
    sketch.erase();
  }
  sketch.pen1=()=>{
    sketch.noErase();
    sketch.size=1;
    sketch.draw();
  }
  sketch.pen2=()=>{
    sketch.noErase();
    sketch.size=5;
    sketch.draw();
  }

  sketch.pen3=()=>{
    sketch.noErase();
    sketch.size=10;
    sketch.draw();
  }

  sketch.pen4=()=>{
    sketch.noErase();
    sketch.size=20;
    sketch.draw();
  }
  sketch.colo=(col)=>{
    console.log(col.toString());
    sketch.stroke(col.toString());
  }
  sketch.txt=(data)=>{
    console.log("text called");
    sketch.textSize(30);
    // sketch.size=1;
    // let pos=window.localStorage.getItem("position");
    // pos=JSON.parse(pos);
    sketch.stroke('white');
    console.log(cursor_x,cursor_y);
    sketch.text(data,cursor_x,cursor_y);
    sketch.stroke('black');
  }
  sketch.clearall=()=>{
    console.log("clear called");
    sketch.clear();
  }
  sketch.toggle=()=>{
    if(document.body.style['userSelect'] ==="none"){
        console.log("hell");
        document.body.style['userSelect'] ="auto"
        sketch.size=0;
      }else{
        document.body.style['userSelect'] ="none"
        sketch.size=1;
      }
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
    else if(request.message==="color"){
      console.log("color");
      console.log(request.value);
      myp5.colo(request.value);
    }
    else if(request.message==="text"){
      console.log("text");
      myp5.txt(request.data);
    }
    else if(request.message==="clearall"){
      console.log("clear all ");
      myp5.clearall();
    }
    else if(request.message==="save_position"){
      console.log("save position");
      console.log(cursor_x+" "+cursor_y);
      window.localStorage.setItem("position",JSON.stringify({
        x:cursor_x,
        y:cursor_y
      }));
    }
    else if(request.message==="screenshot"){
      console.log("screenshot");
      screenshot().then((img) => {
        console.log(img);
      }).catch((err) => {
        console.log(err);
      })
    }
    else if(request.message==="toggle"){
      console.log("toggle");
      myp5.toggle();
    }
  }
);


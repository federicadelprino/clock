function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES)
  textFont('Georgia')
  fill(255);
  textSize(40);

}

function draw() {
background(255, 236, 198); 
 
 translate(width/2,height/2);
 
 // ore
  if (hour()>12) {
    var hour12 = hour()-12
  } else {
    var hour12 = hour()
  }
 clock(hour12,12,50,270,[250,173,142])
 
  
  // minuti
 clock(minute(),60,25,180,[255,214,163])
 
 // secondi
  clock(second(),60,10,90,[224, 184, 210])
  
  
push()
var diameter = 0;
  
  if(width > height) {
    diameter = height;
  }else{
    diameter = width;
  
  }
  
 textSize(30);
 
//posizione
var p1 = -50 
var p2 = -20

fill(81, 5, 55);
//ora Berlino
var h = hour();
text("\n" + h, p1+30, p2);

 textSize(16);
var m = minute();
text("\n" + m, p1+37, p2+50);

var s = second();
text("\n" + s, p1+37, p2+80);

var h2 = hour()+1;
if (hour()+1==25) {
text ("0");
}

fill(255);
//ora El Cairo
 textSize(25);
text("\n" + h2, p1+270, p2);

 textSize(16);
var m2 = minute();
text("\n" + m2, p1+275, p2+50);

var s2 = second();
text("\n" + s2, p1+275, p2+80);

//ora Greenwich
textSize(25);
text("\n" + h2, p1-190, p2);

 textSize(16);
var m2 = minute();
text("\n" + m2, p1-190, p2+50);

var s2 = second();
text("\n" + s2, p1-190, p2+80);

  fill(81, 5, 55);
  textSize(25);
  text('Berlin',p1+10, -40);
  textSize(16);
  text('UTC+1',p1+20, -20);
  fill(255);
  textSize(25);
  text('El Cairo',p1+210, -40);
  textSize(16);
  text('UTC+2',p1+245, -20);
  textSize(25);
  text('Greenwich',p1-190, -40);
  textSize(16);
  text('UTC+0',p1-190, -20);
  
pop();  
}

function clock(timeValue,range,size,radius,col){
  
  push()
  var angle = map(timeValue,0,range,-90,255)
  noFill()
  noStroke()
  fill(col)
  if (angle != -90){
    arc(0,0,radius*2,radius*2,-90,angle+20,PIE)
  }
  stroke(col)
  line(0,0,radius*cos(angle),radius*sin(angle))
  rotate(angle)
  fill(col)
  stroke(0);
  noStroke();
  fill(30,40,100,0)
  ellipse(0,0,radius*2-10,radius*2-10)
  pop()
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

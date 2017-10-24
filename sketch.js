function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES)
  textFont('Georgia')
  fill(255);
  textSize(40);

}

function draw() {
background(30); 
 
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
 
//ora Berlino
var h = hour();
text("\n" + h, -130, -20);

 textSize(16);
var m = minute();
text("\n" + m, -130, +30);

var s = second();
text("\n" + s, -130, 60);

//ora El Cairo
var h2 = hour()+1;
if (hour()+1==25) {
text ("0");
}
 textSize(30);
text("\n" + h2, 50, -20);

 textSize(16);
var m2 = minute();
text("\n" + m2, +50, +30);

var s2 = second();
text("\n" + s2, +50, 60);


  fill(255);
  textSize(30);
  text('Berlin',-130, -60);
  text('UTC+1',-130, -30);
  text('El Cairo',+50, -60);
  text('UTC+2',+50, -30);
  
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
  //ellipse(radius,0,size,size)
  fill(30,40,100,20)
  ellipse(0,0,radius*2-10,radius*2-10)
  pop()
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

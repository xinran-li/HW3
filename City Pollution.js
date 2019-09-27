var x = 210;
var y = 290;
var r = 0;
var Dia = 50;
var DiaColor = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  
  stroke(0, 100);
  line(0, 200, 40, 200);
  line(40, 200, 40, 140);
  line(40, 140, 60, 140);
  line(60, 140, 60, 180);
  line(60, 180, 100, 180);
  line(100, 180, 100, 250);
  line(100, 250, 200, 250);
  line(200, 250, 200, 150);
  line(200, 150, 270, 150);
  line(270, 150, 270, 130);
  line(270, 130, 300, 130);
  line(300, 130, 300, 200);
  line(300, 200, 400, 200);
  
  
  
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);
  fill(255, 120);
  rect(105, height, 30, -80);
  fill(255, 70);
  rect(145, height, 20, -100);
  fill(255, 160);
  rect(265, height, 30, -50);
  
   // draw clouds
  fill(DiaColor);
  ellipse(250, 20, Dia);
  ellipse(220, 20, Dia);
  ellipse(200, 20, Dia);
  ellipse(150, 70, Dia);
  ellipse(130, 70, Dia);

  // draw puff of smoke
  // fades darker as it gets closer to 0
  fill(y);
  translate(x, y);
  rotate(r);
  rect(-10, -10, 20, 20);
  
  // up 3 pixels
  y -= 3;

  // rotate 0.05 radians, which is about 2.8 degrees
  r += 0.05;

  // if reach past the top a bunch
  if (y < -150) {
    y = 290;
    Dia = Dia + 10;
    DiaColor = DiaColor - 10;
  }

  
}

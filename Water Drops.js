var x = 210;
var y = 220;
var waterLevel = 1;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  noStroke();

  // draw pipe
  fill(255);
  rect(0, 200, x, 20);
  rect(185, 190, 25, 40);
  
  // draw drip
  fill(0, 0, 220);
  ellipse(x, y, 10);

  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 3

  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 220;
    waterLevel = waterLevel + 1;
    

  }
  
  fill(0, 0, 200);
  rect(0, height-waterLevel, 400, waterLevel);
    
}

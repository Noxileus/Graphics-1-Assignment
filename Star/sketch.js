function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 128);

  let centerX = width/2; 
  let centerY = height/2; 
  let diameter = 200;

  fill(0, 128, 0);
  circle(centerX, centerY, diameter);

  noFill(); 
  strokeWeight(8);
  stroke(255); 
  circle(centerX, centerY, diameter);

  fill(255, 0, 0);
  noStroke();
  drawStar(centerX, centerY, 40, 100, 5);
}

function drawStar(x, y, radius1, radius2, npoints){
  let angle = TWO_PI/npoints;
  let halfAngle = angle/2.0;
  strokeWeight(6);
  stroke(255);
  beginShape();
  for(let a = -PI/2; a < TWO_PI-PI/2; a += angle){
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function setup() {
  createCanvas(350,170);
  colorMode(RGB);
  angleMode(DEGREES);
}

function draw() {
  background(50, 300, 20);

  stroke(0);
  strokeWeight(1.5);

  fill(255);
  circle(100,100,100);

  rectMode(CENTER);
  rect(250,100,100,100);

  
}

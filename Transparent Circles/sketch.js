function setup() {
  createCanvas(400, 400);
  noStroke();
  blendMode(BLEND);
}

function draw() {
  background(255);

  let circleSize = 120;

  let centerX = width/2;
  let centerY = height/2;

  let distance = 40;

  fill(255,100, 130, 127);
  circle(centerX, centerY - distance, circleSize);

  fill(100, 100, 255, 127);
  circle(centerX - distance, centerY + distance, circleSize);

  fill(100, 255, 100, 127);
  circle(centerX + distance, centerY + distance, circleSize);
}


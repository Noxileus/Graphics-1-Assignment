function setup() {
  createCanvas(250, 100);
}

function draw() {
  background(0);

  let centerX = width/3;
  let centerY = height/2;

  fill(255,255,0);
  arc(centerX, centerY, 80, 80, 7*PI/6, 5*PI/6, PIE);

  let ghostX = 2 * width/3;
  let ghostY = height/2;

  fill(255,0, 0);
  rect(ghostX - 30, ghostY - 40, 80, 80, 40, 40, 0, 0);

  fill(255);
  ellipse(ghostX - 10, ghostY - 5, 25, 25);
  ellipse(ghostX + 30, ghostY - 5, 25, 25);

  fill(0, 0, 255);
  ellipse(ghostX - 10, ghostY - 5, 15, 12);
  ellipse(ghostX + 30, ghostY - 5, 15, 12);

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    fill(250);
    ellipse(mouseX, mouseY, 100, 100);
  } else {
    background(51);
    ellipse(mouseX, mouseY, 100, 100);
  }
}

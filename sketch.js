function setup() {
  createCanvas(400, 400);
  background("pink");
}

function draw () {
  stroke("black");
  fill("blank");
  
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
}
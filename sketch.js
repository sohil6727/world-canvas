function setup() {
    createCanvas(720, 400);
    background(230);
    strokeWeight(2);
  }
  
  function draw() {
    if (mouseIsPressed) {
      stroke(255);
    } else {
      stroke(240, 94, 182);
    }
    line(mouseX - 66, mouseY, mouseX + 66, mouseY);
    line(mouseX, mouseY - 66, mouseX, mouseY + 66);
  }
  
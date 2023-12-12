let particles = [];
let r = 0;
let b = 0;
let g = 0;
let x = 0;
var y;
var mouse;
var ca;


function setup() {
  frameRate(20);
  ca = createCanvas(windowWidth, windowHeight);
  ca.position(0, 0);
  mouse = createVector(mouseX, mouseY);
  for (let i = 0; i < 250; i++) {
    particles.push(new particle());
  }

}

function draw() {
  background(0);
  mousepos()
  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].show();
  }

}

function mousepos() {
  mouse.x = mouseX;
  mouse.y = mouseY;
}
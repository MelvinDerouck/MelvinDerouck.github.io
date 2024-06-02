let particles = [];
let r = 0;
let b = 0;
let g = 0;
let x = 0;
var y;
var mouse;
var ca;

const topSection =  document.getElementById('top');
function setup() {
  frameRate(60); // FPS
  ca = createCanvas(windowWidth, topSection.offsetHeight);
  ca.position(0, 0);
  mouse = createVector(mouseX, mouseY);
  for (let i = 0; i < 80; i++) { // Nb particules à l'écran
    particles.push(new particle());
  }

}

function windowResized() {
  resizeCanvas(windowWidth, topSection.offsetHeight); 
}

function draw() {
  clear();
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
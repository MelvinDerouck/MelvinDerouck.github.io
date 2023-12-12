class particle {
  constructor() {
    this.pos = createVector(abs(randomGaussian(0, 1)) * windowWidth, abs(randomGaussian(0, 1)) * windowHeight)
    this.vel = createVector(randomGaussian(0, 1.5), randomGaussian(0, 1.5))
  }
  show() {
    fill(255);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, 4, 4)
    this.showlines()
  }
  move() {
    if (this.pos.x > windowWidth + 50 || this.pos.x < -50 || this.pos.y > windowHeight + 50 || this.pos.y < -50) {
      this.vel.mult(-1);
    }
    this.pos.add(this.vel);
    if (this.pos.dist(mouse) < 100) {
      y = p5.Vector.sub(this.pos, mouse)
      y.setMag(100 - this.pos.dist(mouse))
      this.pos.add(y);
    }
  }
  showlines() {
    for (let i = 0; i < particles.length; i++) {
      x = this.pos.dist(particles[i].pos)
      if (x < 100) {
        if (this.pos.x < windowWidth / 2) {
          r = 255 - map(this.pos.x, 0, windowWidth / 2, 0, 255);
          g = map(this.pos.x, 0, windowWidth / 2, 0, 255);
          b = 0;
        } else {
          r = 0
          g = 255 - map(this.pos.x - windowWidth / 2, 0, windowWidth / 2, 0, 255);
          b = map(this.pos.x - windowWidth / 2, 0, windowWidth / 2, 0, 255);
        }
        stroke(r, g, b);
        strokeWeight(x / 100)
        line(this.pos.x, this.pos.y, particles[i].pos.x, particles[i].pos.y)
      }
    }
  }
}
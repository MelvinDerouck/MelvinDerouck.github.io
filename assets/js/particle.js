class particle {
  constructor() {
    this.pos = createVector(abs(randomGaussian(0, 0.75)) * windowWidth, abs(randomGaussian(0, 0.75)) * windowHeight) // position aléatoire sur la toile
    this.vel = createVector(randomGaussian(0, 0.25), randomGaussian(0, 0.25)) // Vitesse
    this.size = random(3, 10); // Taille de particules
  }
  show() {
    fill(220); // Couleurs points
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, this.size, this.size); 
    this.showlines();
  }
  move() {
    if (this.pos.x > windowWidth + 50 || this.pos.x < -50 || this.pos.y > windowHeight + 50 || this.pos.y < -50) {
      this.vel.mult(-1);
    }
    this.pos.add(this.vel);
    if (this.pos.dist(mouse) < 150) { // distance avec la souris
      y = p5.Vector.sub(this.pos, mouse)
      y.setMag(0.5 * (150 - this.pos.dist(mouse))) // distance avec la souris
      this.pos.add(y);
    }
  }
  showlines() {
    for (let i = 0; i < particles.length; i++) {
        let d = this.pos.dist(particles[i].pos);
        if (d < 100) {
            stroke(240); // Couleur lignes
            strokeWeight(d / 100); // Couleurs des lignes diminue avec distance
            line(this.pos.x, this.pos.y, particles[i].pos.x, particles[i].pos.y);
        }
    }
}
}
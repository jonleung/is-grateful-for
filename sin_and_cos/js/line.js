class Line {
  constructor(a, b, color) {
    this.a = a;
    this.b = b;
    this.color = color || '#000000';
  }

  calcLength() {
    return a.calcDistFrom(b);
  }

  draw() {
    push();
    stroke(this.color);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    pop();
  }
}

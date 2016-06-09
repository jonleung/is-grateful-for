class Dot {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  calcDistFrom(otherDot) {
    var thisDot = this;

    var dist = Math.sqrt(
                    sq(thisDot.x - otherDot.x) + sq(thisDot.y - otherDot.y)
                   )
    return dist;
  }

  isTouching(otherDot) {
    var thisDot = this;


    var adjacentDist = thisDot.r + otherDot.r; // the distance between dots
                                                   // if they were perfectly
                                                   // adjacent

    var actualDist = thisDot.calcDistFrom(otherDot);

    debugger

    if (actualDist < adjacentDist) {
      return true;
    }
    else {
      return false;
    }
  }

  draw() {
    push();
    fill(BLACK);
    ellipse(this.x, this.y, this.r, this.r);
    pop();
  }
}

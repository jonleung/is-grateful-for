class PolyLine {
  constructor(options) {
    options = options || {};
    this.maxLength = options.maxLength === undefined ? Number.POSITIVE_INFINITY : options.maxLength;
    this.color = options.color === undefined ? '#000000' : options.color;

    this.points = [];
  }

  addPoint(x, y) {
    this.points.push(new Point(x, y));
    this.length = this.points.length;
    while (this.points.length > this.maxLength) {
      this.points.shift();
    }
  }

  forEachPointPair(fn) {
    for (var i=1; i<this.points.length; i++) {
      var a = this.points[i-1];
      var b = this.points[i];
      fn(a, b, i-1);
    }
  }

  calcWeightedLength() {
    var that = this;

    var totalWeightedLength = 0;

    if (this.points.length === 0) {
      totalWeightedLength = 0;
    }
    else {
      this.forEachPointPair(function(a, b, i) {
        var weightedLength = a.calcDistFrom(b) * i/that.points.length;
        totalWeightedLength += weightedLength;
      })
    }

    return totalWeightedLength;
  }

  calcWeightedLengthOverTotalLength() {
    return this.calcWeightedLength() / this.calcLength();
  }

  calcLength() {
    var totalLength = 0;

    if (this.points.length === 0) {
      totalLength = 0;
    }
    else {
      this.forEachPointPair(function(a, b) {
        var segmentLength = a.calcDistFrom(b);
        totalLength += segmentLength;
      })
    }
    return totalLength;
  }

  draw(i, j) {
    if (this.points.length >= 2) {
      push();
      stroke(this.color);
      if (i === undefined && j === undefined) {
        i = 1;
        j = this.points.length;
      }
      for (var index=i; index<j; index++) {
        var a = this.points[index-1];
        var b = this.points[index];
        line(a.x, a.y, b.x, b.y);
      }
      pop();

      return true;
    }
    else {
      return false
    }
  }
}

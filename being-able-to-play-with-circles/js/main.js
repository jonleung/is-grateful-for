var NUM_DOTS = 70000;

var dots;

function generateDots() {
  _.times(NUM_DOTS, function(i) {
    var x = random(0, width);
    var y = random (0, height);
    var r = random(3, 15);
    // var r = map(round(random(1, 4)), 1, 2, 3, 11);
    // var r = random(3, 11);
    var newDot = new Dot(x, y, r);

    var isTouching = false;
    for(var i=0; i<dots.length; i++) {
      var oldDot = dots[i];

      if (newDot.isTouching(oldDot)) {
        isTouching = true;
        break;
      }
    }

    if (!isTouching) {
      dots.push(newDot);
    }
  })
}

function setup() {
  var cnv = createCanvas(700, 400);
  cnv.parent('sketch');

  dots = [];
  // generateDots();
  dots.forEach(function(dot) {
    dot.draw();
  })
}

function draw() {
  debugger
  var x = random(0, width);
  var y = random (0, height);
  var r = random(3, 15);
  // var r = map(round(random(1, 4)), 1, 2, 3, 11);
  // var r = random(3, 11);
  var newDot = new Dot(x, y, r);

  var isTouching = false;
  for(var i=0; i<dots.length; i++) {
    var oldDot = dots[i];

    if (newDot.isTouching(oldDot)) {
      isTouching = true;
      break;
    }
  }

  if (!isTouching) {
    dots.push(newDot);
    newDot.draw();
  }

}

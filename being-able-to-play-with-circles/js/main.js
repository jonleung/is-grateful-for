debugger
BLACK = 0;
WHITE = 255;

var dots;

function setup() {
  var cnv = createCanvas(700, 400);
  cnv.parent('sketch');

  dots = [];
}

function draw() {
  clear();

  var x = random(0, width);
  var y = random (0, height);
  var r = random(10, 200);

  var newDot = new Dot(x, y, r);

  console.log(newDot);

  if (dots.length > 0) {
    dots.forEach(function(oldDot) {
      if (newDot.isTouching(oldDot)) {

      }
      else {
        dots.push(newDot);
      }
    });
  }
  else {
    dots.push(newDot);
  }


  dots.forEach(function(dot) {
    dot.draw();
  })
}

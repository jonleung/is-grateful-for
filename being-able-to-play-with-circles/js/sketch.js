var NUM_DOTS = 70000;
var SMALLEST_RADIUS = 3;
var LARGEST_RADIUS = 15;

var COLOR_PALLETES = [
  ['#D1D5D8', '#3498DB', '#F1C40F', '#E74C3C', '#F1C40F'], //http://flatcolors.net/palette/203-flat-wbuttons
  ['#FE6860', '#FE8A71', '#FE6860', '#D9BBAE', '#FE6860'], // http://flatcolors.net/palette/673-archival-funk
  ['#199EC7', '#40BC86', '#EC555C', '#FCB410'] // http://flatcolors.net/palette/451-exotel
];

var dots;
var colorPalette;

function setup() {
  var cnv = createCanvas(windowWidth-15, windowHeight);
  cnv.parent('sketch');
  colorPalette = _.sample(COLOR_PALLETES);

  dots = [];
}

function windowResized() {
  resizeCanvas(windowWidth-15, windowHeight);
  dots = [];
}

function draw() {
  var continueLooking = true;

  while (continueLooking) {
    var x = random(0, width);
    var y = random (0, height);
    var r = random(SMALLEST_RADIUS, LARGEST_RADIUS);
    var color = _.sample(colorPalette);

    var newDot = new Dot(x, y, r, color);

    var isTouching = false;

    for(var i=0; i<dots.length; i++) {
      var oldDot = dots[i];

      if (newDot.isTouching(oldDot)) {
        isTouching = true;
        break;
      }
    }

    if (!isTouching) {
      continueLooking = false;
      dots.push(newDot);
      newDot.draw();
    }
  }

}

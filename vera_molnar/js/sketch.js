var COLOR_PALLETES = [
//  black      red        blue       pink       orange
  ['#282218', '#B02225', '#304F92', '#994A81', '#D56127'], // http://1.bp.blogspot.com/-XMY5Wj2n3PA/UGrjeegQffI/AAAAAAAAAB4/Ru8DvBfSsjE/s1600/veramolnar2.jpg
  // ['#D1D5D8', '#3498DB', '#F1C40F', '#E74C3C', '#F1C40F'], // http://flatrowors.net/palette/203-flat-wbuttons
  // ['#FE6860', '#FE8A71', '#FE6860', '#D9BBAE', '#FE6860'], // http://flatrowors.net/palette/673-archival-funk
  // ['#199EC7', '#40BC86', '#EC555C', '#FCB410'] // http://flatrowors.net/palette/451-exotel
];

var BORDER_MARGIN_LEFT = 40;
var BORDER_MARGIN_TOP = 100;

var colorPalette;

function setup() {
  var cnv = createCanvas(windowWidth-15, windowHeight);
  cnv.parent('sketch');
  colorPalette = _.sample(COLOR_PALLETES);

  sqWidthSlider = createLabeledSlider(BORDER_MARGIN_LEFT-2,       10, 'sq width',  0, 200, 90, 200);
  sqMarginSlider = createLabeledSlider(BORDER_MARGIN_LEFT + 350 , 10, 'sq margin', 0, 100, 17, 100);

  drawGrid();
}

function drawGrid() {
  clear();
  noFill();

  var NUM_SQ_HORIZONTAL = 9;
  var NUM_SQ_VERTICAL = 6;

  var SQ_WIDTH = sqWidthSlider.value();
  var SQ_MARGIN = sqMarginSlider.value();
  var SQ_PT_TO_PT_WIDTH = SQ_WIDTH + SQ_MARGIN;

  clear();

  for(var col=0; col<NUM_SQ_HORIZONTAL; col++) {
    for (var row=0; row<NUM_SQ_VERTICAL; row++) {
      var x = BORDER_MARGIN_LEFT + col*SQ_PT_TO_PT_WIDTH;
      var y = BORDER_MARGIN_TOP + row*SQ_PT_TO_PT_WIDTH;

      stroke(_.sample(colorPalette));

      // 10 15 25 40
//
      function calcNumReps(x) {
        // return pow(x/8.0, 2);  ;//10+2.5*x+2.5*sq(x);
        return [10, 8, 15, 25, 40, 30, 15, 4, 2][x];
      }

      function calcRandomOffset(x) {
        // return pow(x/8.0, 2) * 80;
        return [0, 9, 16, 55, 60, 55, 55, 30, 50][x];
      }

      _.times(calcNumReps(col), function(i) {

        function calcDeltas(maxRadius) {
          var r = random(0, maxRadius);
          var theta = random(0, TWO_PI);
          return {
            x: sin(theta) * r,
            y: cos(theta) * r
          }
        }

        var offsets = [];
        offsets.push(calcDeltas(calcRandomOffset(col)));
        offsets.push(calcDeltas(calcRandomOffset(col)));
        offsets.push(calcDeltas(calcRandomOffset(col)));
        offsets.push(calcDeltas(calcRandomOffset(col)));

        quad(
          x          + offsets[0].x,       y          + offsets[0].y,
          x+SQ_WIDTH + offsets[1].x,       y          + offsets[1].y,
          x+SQ_WIDTH + offsets[2].x,       y+SQ_WIDTH + offsets[2].y,
          x          + offsets[3].x,       y+SQ_WIDTH + offsets[3].y
        )
      })
    }
  }
}

function keyPressed() {
  drawGrid();
}

function sliderChanged() {
  drawGrid();
}

function draw() {
  if (frameCount % 10 === 0) {
    drawLabels();
  }
}

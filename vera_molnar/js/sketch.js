var COLOR_PALLETES = [
//  black      red        blue       pink       orange
  ['#282218', '#B02225', '#304F92', '#994A81', '#D56127'], // http://1.bp.blogspot.com/-XMY5Wj2n3PA/UGrjeegQffI/AAAAAAAAAB4/Ru8DvBfSsjE/s1600/veramolnar2.jpg
  // ['#D1D5D8', '#3498DB', '#F1C40F', '#E74C3C', '#F1C40F'], // http://flatrowors.net/palette/203-flat-wbuttons
  // ['#FE6860', '#FE8A71', '#FE6860', '#D9BBAE', '#FE6860'], // http://flatrowors.net/palette/673-archival-funk
  // ['#199EC7', '#40BC86', '#EC555C', '#FCB410'] // http://flatrowors.net/palette/451-exotel
];

var BORDER_MARGIN_LEFT = 40;
var BORDER_MARGIN_TOP = 250;

var colorPalette;

function setup() {
  var cnv = createCanvas(windowWidth-15, windowHeight);
  cnv.parent('sketch');
  colorPalette = _.sample(COLOR_PALLETES);

  numSqHorizontalSlider = createLabeledSlider(30, 30, '# sq horiz', 0, 25, 9, 100);
  numSqVerticalSlider = createLabeledVerticalSlider(30, 30, '# sq vert', 0, 20, 6, 100);

  sqWidthSlider = createLabeledSlider(BORDER_MARGIN_LEFT-2, 150, 'sq width', 0, 200, 90, 200);
  sqMarginSlider = createLabeledSlider(BORDER_MARGIN_LEFT + 350 , 150, 'sq margin', 0, 100, 17, 100);

  repsSlider = createLabeledSlider(BORDER_MARGIN_LEFT + 350, 30, 'reps', 0, 20, 10, 80);
  randomOffsetAmountSliderMin = createLabeledSlider(BORDER_MARGIN_LEFT + 350, 60, 'min rand offset', 0, 3000, 500, 400);
  // randomOffsetAmountSliderMax = createLabeledSlider(BORDER_MARGIN_LEFT + 350, 85, 'max rand offset', 0, 1000, 100, 400);

  drawGrid();
}

function drawGrid() {
  clear();
  noFill();

  var NUM_SQ_HORIZONTAL = numSqHorizontalSlider.value();
  var NUM_SQ_VERTICAL = numSqVerticalSlider.value();

  var SQ_WIDTH = sqWidthSlider.value();
  var SQ_MARGIN = sqMarginSlider.value();
  var SQ_PT_TO_PT_WIDTH = SQ_WIDTH + SQ_MARGIN;

  var SQ_OVERLAY_REPS = repsSlider.value();
  var RANDOM_OFFSET_MIN = randomOffsetAmountSliderMin.value() / 100;
  var RANDOM_OFFSET_MAX = RANDOM_OFFSET_MIN + 0;

  clear();

  for(var col=0; col<NUM_SQ_HORIZONTAL; col++) {
    for (var row=0; row<NUM_SQ_VERTICAL; row++) {
      var x = BORDER_MARGIN_LEFT + col*SQ_PT_TO_PT_WIDTH;
      var y = BORDER_MARGIN_TOP + row*SQ_PT_TO_PT_WIDTH;

      stroke(_.sample(colorPalette));

      // 10 15 25 40

      function calcNumReps(x) {
        // return 10+2.5*x+2.5*sq(x);
        return [10, 8, 15, 35, 50, 40, 20, 4, 2][x];
      }

      function calcRandomOffset(x) {
        return [0, 8, 15, 50, 60, 50, 50, 50, 40][x];
      }

      _.times(calcNumReps(col), function(i) {
        quad(
          x          + random(0-calcRandomOffset(col), calcRandomOffset(col)),       y          + random(0-calcRandomOffset(col), calcRandomOffset(col)),
          x+SQ_WIDTH + random(0-calcRandomOffset(col), calcRandomOffset(col)),       y          + random(0-calcRandomOffset(col), calcRandomOffset(col)),
          x+SQ_WIDTH + random(0-calcRandomOffset(col), calcRandomOffset(col)),       y+SQ_WIDTH + random(0-calcRandomOffset(col), calcRandomOffset(col)),
          x          + random(0-calcRandomOffset(col), calcRandomOffset(col)),       y+SQ_WIDTH + random(0-calcRandomOffset(col), calcRandomOffset(col))
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
  drawLabels();
}

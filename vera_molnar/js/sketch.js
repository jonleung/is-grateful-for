var COLOR_PALLETES = [
  ['#D1D5D8', '#3498DB', '#F1C40F', '#E74C3C', '#F1C40F'], //http://flatrowors.net/palette/203-flat-wbuttons
  ['#FE6860', '#FE8A71', '#FE6860', '#D9BBAE', '#FE6860'], // http://flatrowors.net/palette/673-archival-funk
  ['#199EC7', '#40BC86', '#EC555C', '#FCB410'] // http://flatrowors.net/palette/451-exotel
];

var BORDER_MARGIN_LEFT = 40;
var BORDER_MARGIN_TOP = 200;

function setup() {
  var cnv = createCanvas(windowWidth-15, windowHeight);
  cnv.parent('sketch');
  colorPalette = _.sample(COLOR_PALLETES);

  numSqHorizontalSlider = createLabeledSlider(30, 30, '# sq horiz', 0, 10, 6, 80);
  numSqVerticalSlider = createLabeledVerticalSlider(30, 30, '# sq vert', 0, 10, 6, 80);

  sqWidthSlider = createLabeledSlider(BORDER_MARGIN_LEFT-2, 150, 'sq width', 0, 200, 60, 200);
  sqMarginSlider = createLabeledSlider(BORDER_MARGIN_LEFT + 350 , 150, 'sq margin', 0, 100, 30, 100);


  repsSlider = createLabeledSlider(200, 30, 'reps', 0, 255, 1, 80);
}

function draw() {

  var NUM_SQ_HORIZONTAL = numSqHorizontalSlider.value();
  var NUM_SQ_VERTICAL = numSqVerticalSlider.value();

  var SQ_WIDTH = sqWidthSlider.value();
  var SQ_MARGIN = sqMarginSlider.value();
  var SQ_PT_TO_PT_WIDTH = SQ_WIDTH + SQ_MARGIN;

  var SQ_OVERLAY_REPS = repsSlider.value();

  clear();

  for(var col=0; col<NUM_SQ_HORIZONTAL; col++) {
    for (var row=0; row<NUM_SQ_VERTICAL; row++) {
      var x = BORDER_MARGIN_LEFT + col*SQ_PT_TO_PT_WIDTH;
      var y = BORDER_MARGIN_TOP + row*SQ_PT_TO_PT_WIDTH;

      for (var reps = 0; reps<SQ_OVERLAY_REPS; reps++) {
        rect(x+reps, y+reps, SQ_WIDTH, SQ_WIDTH);
      }
    }
  }

  drawLabels();
}

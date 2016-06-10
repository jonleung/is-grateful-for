var NUM_SQ_HORIZONTAL = 6;
var NUM_SQ_VERTICAL = 6;

var COLOR_PALLETES = [
  ['#D1D5D8', '#3498DB', '#F1C40F', '#E74C3C', '#F1C40F'], //http://flatrowors.net/palette/203-flat-wbuttons
  ['#FE6860', '#FE8A71', '#FE6860', '#D9BBAE', '#FE6860'], // http://flatrowors.net/palette/673-archival-funk
  ['#199EC7', '#40BC86', '#EC555C', '#FCB410'] // http://flatrowors.net/palette/451-exotel
];

function setup() {
  var cnv = createCanvas(windowWidth-15, windowHeight);
  cnv.parent('sketch');
  colorPalette = _.sample(COLOR_PALLETES);
}

function draw() {
  rect(0, 2, width, height);

  var BORDER_MARGIN_LEFT = 40;
  var BORDER_MARGIN_TOP = 40;

  var SQ_WIDTH = 60;
  var SQ_MARGIN = 30;
  var SQ_PT_TO_PT_WIDTH = SQ_WIDTH + SQ_MARGIN;

  var SQ_OVERLAY_REPS = 20;

  for(var col=0; col<NUM_SQ_HORIZONTAL; col++) {
    for (var row=0; row<NUM_SQ_VERTICAL; row++) {
      var x = BORDER_MARGIN_LEFT + col*SQ_PT_TO_PT_WIDTH;
      var y = BORDER_MARGIN_TOP + row*SQ_PT_TO_PT_WIDTH;

      for (var reps = 0; reps<SQ_OVERLAY_REPS; reps++) {
        rect(x+reps, y+reps, SQ_WIDTH, SQ_WIDTH);
      }
    }
  }
}

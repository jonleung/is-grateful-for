var NUM_HORIZONTAL = 6;
var NUM_VERTICAL = 6;

var COLOR_PALLETES = [
  ['#D1D5D8', '#3498DB', '#F1C40F', '#E74C3C', '#F1C40F'], //http://flatcolors.net/palette/203-flat-wbuttons
  ['#FE6860', '#FE8A71', '#FE6860', '#D9BBAE', '#FE6860'], // http://flatcolors.net/palette/673-archival-funk
  ['#199EC7', '#40BC86', '#EC555C', '#FCB410'] // http://flatcolors.net/palette/451-exotel
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

  for(var i=0; i<NUM_HORIZONTAL; i++) {

      var x = BORDER_MARGIN_LEFT + i*SQ_PT_TO_PT_WIDTH;

      rect(x, BORDER_MARGIN_TOP, SQ_WIDTH, SQ_WIDTH);
  }
}

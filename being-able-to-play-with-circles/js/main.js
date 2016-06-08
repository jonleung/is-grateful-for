BLACK = 0;
WHITE = 255;

function setup() {
  var cnv = createCanvas(700, 400);
  cnv.parent('sketch');

}

function draw() {
  var NUM_CIRCLES = 10;
  NUM_CIRCLES = round(map(mouseX, 0, width, 0, 10));

  clear();
  fill(WHITE);
  rect(0, 0, width-1, height-1);

  var H_SPACING = 100;
  H_SPACING = map(mouseY, 0, width, 0, 500)
  console.log(H_SPACING);

  fill(BLACK);

  _.times(NUM_CIRCLES, function(i) {
    ellipse(50 + i*H_SPACING, 100, 50, 50);
  })
}

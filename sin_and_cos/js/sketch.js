var defaultPrevent=function(e){e.preventDefault();}
document.body.parentElement.addEventListener("touchstart", defaultPrevent);
document.body.parentElement.addEventListener("touchmove" , defaultPrevent);
document.body.addEventListener("touchstart", defaultPrevent);
document.body.addEventListener("touchmove" , defaultPrevent);

var polyLine;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  polyLine = new PolyLine({maxLength: 20});
}

var prevX = 0;
var prevY = 0;

var BAR_HEIGHT = 50;

function draw() {
  clear();
  ellipse(touchX, touchY, 40, 40);
  polyLine.addPoint(touchX, touchY);
  polyLine.draw();


  push();

  textSize(12);

  var baseY = 0;
  var offsetY = baseY + BAR_HEIGHT;

  var weightedLength = polyLine.calcWeightedLength();
  fill('black');
  rect(0, baseY, weightedLength, BAR_HEIGHT);
  fill('gray');
  text('weighted length: ' + weightedLength, 10, baseY + BAR_HEIGHT - 13);

  baseY += BAR_HEIGHT;

  var weightedLengthOverTotalLength = polyLine.calcWeightedLengthOverTotalLength();
  fill('green');
  rect(0, baseY, weightedLengthOverTotalLength * 500, BAR_HEIGHT);
  fill('gray');
  text('weighted length / total length: ' + weightedLengthOverTotalLength, 10, baseY + BAR_HEIGHT - 13);

  baseY += BAR_HEIGHT;

  var constant = 225;
  var calcWeightedLengthOverConstant = polyLine.calcWeightedLength() / constant;
  fill('green');
  rect(0, baseY, calcWeightedLengthOverConstant * 500, BAR_HEIGHT);
  fill('gray');
  text('weighted length / ' + constant + ' : ' + calcWeightedLengthOverConstant, 10, baseY + BAR_HEIGHT - 13);

  pop();
}

// function sliderChanged() {
// }

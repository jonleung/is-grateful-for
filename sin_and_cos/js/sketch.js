var defaultPrevent=function(e){e.preventDefault();}
document.body.parentElement.addEventListener("touchstart", defaultPrevent);
document.body.parentElement.addEventListener("touchmove" , defaultPrevent);
document.body.addEventListener("touchstart", defaultPrevent);
document.body.addEventListener("touchmove" , defaultPrevent);

var polyLine;
var ding;
var osc;

function preload() {
  ding = loadSound('sounds/ding.mp3');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  polyLine = new PolyLine({
    maxLength: 20,
  });
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(.5);
  osc.start();
}

var prevX = 0;
var prevY = 0;

var BAR_HEIGHT = 50;

function xdraw() {
  clear() ;

  var lines = new PolyLine();

  // var a = new Point(windowWidth/2, windowWidth/2);
  // var b = new Point(windowWidth, windowWidth/2);
  // var c = new Point(touchX, touchY);

  lines.addPoint(windowWidth, windowHeight/2);
  lines.addPoint(windowWidth/2, windowHeight/2);
  lines.addPoint(touchX, touchY);

  // var line1 = new Line(a, b);
  // var line2 = new Line(a, c);

  // line1.draw();
  // line2.draw();

  lines.draw();

  text(degrees(lines.calcLastAngle()), 100, 100);
}

function draw() {
  clear();
  ellipse(touchX, touchY, 40, 40);
  if (polyLine.points.length >= 1) {
    var lastPoint = polyLine.points[polyLine.points.length-1];
    if(lastPoint.calcDistFrom(new Point(touchX, touchY)) === 0) {
      // polyLine.addPoint(touchX, touchY);
    }
    else if (lastPoint.calcDistFrom(new Point(touchX, touchY)) < 3) {
      // do nothing
    }
    else {
      polyLine.addPoint(touchX, touchY);

      var lastAngle = abs(degrees(polyLine.calcLastAngle()))
      if (lastAngle != 0) {
        if (lastAngle < 70) {
          ding.play();
        }
      }
      console.log(polyLine.calcEnergy());
      // text(polyLine.calcSharpTurns(), 100, 100);
    }
  }
  else {
    polyLine.addPoint(touchX, touchY);
  }


  polyLine.draw();

  push();

  textSize(12);

  var baseY = 0;

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

  var constant = 1000;
  var calcWeightedLengthOverConstant = polyLine.calcWeightedLength() / constant;
  osc.amp(calcWeightedLengthOverConstant);
  fill('green');
  rect(0, baseY, calcWeightedLengthOverConstant * 100, BAR_HEIGHT);
  fill('gray');
  text('weighted length / ' + constant + ' : ' + calcWeightedLengthOverConstant, 10, baseY + BAR_HEIGHT - 13);

  baseY += BAR_HEIGHT;

  constant = 10;
  var energyOverConstant = polyLine.calcEnergy() / constant;
  fill('red');
  rect(0, baseY, energyOverConstant, BAR_HEIGHT);
  fill('gray');
  text('energy / ' + constant + ' : ' + energyOverConstant, 10, baseY + BAR_HEIGHT - 13);
  osc.amp(calcWeightedLengthOverConstant);

  pop();
}

// function sliderChanged() {
// }

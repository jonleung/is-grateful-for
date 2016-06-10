function createLabeledSlider(x, y, label, a, b, defaultValue, width) {
  if (width === undefined) {
    width = 80;
  }

  var slider = createSlider(a, b, defaultValue);
  slider.position(x, y);
  slider.style('width', width+'px');

  function drawLabel() {
    push();
    clear();
    textSize(15);
    text(slider.value() + ' ' + label, x + width + 10, y + 13);
    pop();
  }
  drawLabel();

  slider.mouseMoved(function() {
    if(mouseIsPressed) {
      drawLabel();
    }
  })

  return slider;
}

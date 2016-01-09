/*
- Fade in and out text
- Coincide with breathing sound
- Add changing
*/

$(document).ready(function() {

  var breathing = new Audio('breathing.mp3');
  breathing.play();

  setInterval(function() {
    breathing.play();

    var delay = 1500;
    $(".idea").fadeOut()
      .next()
      .delay(delay)
      .fadeIn();

    setTimeout(function() {
      breathing.currentTime = 0;
      breathing.play();
    }, delay);

  }, 3000)
})

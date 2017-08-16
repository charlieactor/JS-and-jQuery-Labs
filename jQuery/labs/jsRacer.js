var p1 = $('.p1');
var p2 = $('.p2');
var bool;
var nextKey = {
  p1: "q",
  p2: "o"
}

$(document).keypress(function(e) {
  var keyPressed = e.key;
  if (keyPressed == nextKey.p1) {
    if (keyPressed == "q") {
      nextKey.p1 = "w";
    } else {
      nextKey.p1 = "q";
    }
    bool = moveCar(p1, e);
    if (bool) {
      alert("BB-8 won! Play again dammit!");
      p1.css('margin-left', '0px');
      p2.css('margin-left', '0px');
    }
  } else if (keyPressed == nextKey.p2) {
    if (keyPressed == "o") {
      nextKey.p2 = "p";
    } else {
      nextKey.p2 = "o";
    }
    bool = moveCar(p2, e);
    if (bool) {
      alert("BMO won! Play again dammit!");
      p1.css('margin-left', '0px');
      p2.css('margin-left', '0px');
    }
  }
});





function moveCar(player, e) {
  player.css('margin-left', '+=10px');
  var endMargin = parseInt(player.css('margin-left')) + parseInt(player.css('width'));
  console.log("endmargin " + endMargin);
  console.log($(window).width());
  if (endMargin > $(window).width()) {
    return true;
  } else {
    return false;
  }
}

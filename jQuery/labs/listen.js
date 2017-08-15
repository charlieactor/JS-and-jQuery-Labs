var butts = $('button');
var demchildren = $('ul li');

butts.click(function(e) {
  if ($(this).text() == "Edit") {
    var resp = prompt("<--- Yo, tell me what to put here dog");
    $(this).prev().text(resp);
  } else {
    var conf = confirm("You sure you wanna delete this shit dog?")
    if (conf) {
      $(this).prev().prev().text("");
    } else {
      alert("word");
    }
  }
  // var idx = butts.indexof($(this));
  // console.log(idx);
});

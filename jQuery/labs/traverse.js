var hello = $('h1');
hello.text("Hello Chuckles");

var listy = ["Hello", "It is I", "Chuckles the great", "And to you sir, I do say", "SHEEEEEEEEEEEEIIIIITTTT"];

var ul = $('ul');
var i = 0;
ul.children().each(function(){
  $(this).text(listy[i]);
  i++;
});

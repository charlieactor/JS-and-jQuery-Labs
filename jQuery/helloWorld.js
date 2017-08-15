$('document').ready(function() {
  console.log("Document has been loaded yaaallll");
  // alert("Document has been loaded!");
});
$('#butt').click(function(e) {
  console.log($(this).text());

  $(this).text() == "On" ? $(this).text("Off") : $(this).text("On");

});

var $ul = $("ul")
var $ulsChildren = $ul.children();
var $ulsParent = $ul.parent();
var $div = $("#wrapperDiv");
var $divDad = $div.parent();
var $secondListItem = $ulsChildren.last();
console.log($ulsChildren);
console.log($ulsParent);
console.log($divDad);
console.log($secondListItem);

$(document).ready(function(e) {
  var readyForm = $('<form>');
  readyForm.attr('name', 'myForm');
  var fName = $('<input>');
  fName.attr('name', 'firstName');
  fName.attr('placeholder', 'Enter your first name');
  var lName = $('<input>');
  lName.attr('name', 'lastName');
  lName.attr('placeholder', 'Enter your last name');
  var sub = $('<input>');
  sub.attr('type', 'submit');
  sub.attr('name', 'submit');
  sub.click(function(e) {
    e.preventDefault();

    $('body').append(
      $('<h1>' + $(myForm.firstName).val() + " " + $(myForm.lastName).val() + '</h1>')
    )
    readyForm.remove();
  });
  readyForm.append(fName, lName, sub);
  $('body').append(readyForm);
})

var form = $(charliesForm);
form.hide();
// var t1 = $(charliesForm.t1);
// var t2 = $(charliesForm.t2);
//
// var sub = $(charliesForm.submit);
//
// sub.click(function(e) {
//   e.preventDefault();
//
//   var formy = {
//     num1 : t1.val(),
//     num2 : t2.val()
//   }
//
//   console.log(formy.num1);
//   console.log(formy.num2);
//   charliesForm.reset(); // Must be name of form, not variable since reset is a JS function
//   form.hide(); // must be the jQuery name...since hide() is a jQuery function.
//   $('h1').text("FORMS, " + formy.num1);
//   var h1 = $('<h1>Hello world</h1>');
//   $('body').append(h1);
// });

var foods = ["carnitas", "soup dumplings", "carne asada", "tacos", "bagels", "sushi"];

var ul = $('<ul>');
foods.forEach(function(v, i, a) {
  var li = $('<li>');
  li.text(v);
  ul.append(li);
});
$('body').append(ul);

$(document).ready(function() {
  console.log("page hella lodaded bro");
  $.ajax({
    type : "GET",
    url : 'https://kkane106.github.io/data.json'
  })
  .done(function(data, status) {
    var peeps = $('#peeps');
    var ul = $('<ul>');
    data.forEach(function (value) {
      console.log(value);
      var li = $('<li>');
      li.text(value.fname + " " + value.lname);
      ul.append(li);

    })
    peeps.append(ul);
  })
  .fail(function(xhr, status, error) {
    console.log(error);
  })
});

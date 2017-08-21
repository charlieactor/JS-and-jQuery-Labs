var button = $('#mybutt');

button.click(function(e) {
  var ul = $('<ul>');
  $.ajax({
    type: "GET",
    url: 'https://raw.githubusercontent.com/SkillDistillery/SD11/master/unit_3/week_2/ajax/ch3/data.json?token=AZZcCpg5S9FBQTCHsSSNiQA5PLdnYzWOks5ZpJHRwA%3D%3D',
    dataType :'json'
  })
  .done(function(data) {
    console.log(data);
    console.log(typeof data);
    data.forEach(function(v, idx) {
      var li = $('<li>');
      var link = "<a href=\"" + v.url + "\">" + v.name + "</a>";
      li.append(link);
      ul.append(li);
    })
  });
  $('#content').append(ul);

});

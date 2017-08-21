$(document).ready(main);

function main() {
  $.ajax({
      type: "GET",
      url: "http://52.25.225.137:8080/pokemon/data/poke?sorted=true",
      dataType: "json"
    })
    .done(function(data, status) {
      data.forEach(function(value, idx) {
        var rows = $('<tr>');
        if (idx % 2 == 0) {
          rows.addClass("striped");
        }
        var td1 = $('<td>')
        var td2 = $('<td>')
        var td3 = $('<td>')
        td1.text(value.pokeId);
        td2.text(value.name);
        var img = "<img src='" + value.img + "'/>";
        td3.append(img);
        rows.append(td1);
        rows.append(td2);
        rows.append(td3);
        $('#pokeBod').append(rows);
      })

    })
    .fail(function(xhr, status, error) {

    });

};

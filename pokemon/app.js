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
        td2.addClass("pokename");
        td2.attr("id", value.pokeId);
        var td3 = $('<td>')
        td1.text(value.pokeId);
        td2.text(value.name);
        var img = "<img src='" + value.img + "'/>";
        td3.append(img);
        rows.append(td1);
        rows.append(td2);
        rows.append(td3);
        $('#pokeBod').append(rows);

        // CLICK EVENT
        td2.click(function(e) {
          $('#pokemon').hide();
          $.ajax({
              type: "GET",
              url: "http://52.25.225.137:8080/pokemon/data/poke/" + e.target.id,
              dataType: "json"
            })
            .done(function(data, status) {
              var disPokemon = data
              console.log(disPokemon);
              var div = $('<div>');
              var img = $('<img>').attr("src", disPokemon.img);
              div.append(img);
              var header = $('<h3>').text("PokeID: " + disPokemon.pokeId);
              var namer = $('<h3>').text(disPokemon.name);
              var species = $('<h4>').text("Species: " + disPokemon.species);
              var height = $('<h4>').text("Height: " + disPokemon.height);
              var weight = $('<h4>').text("Weight: " + disPokemon.weight);
              var desc = $('<p>').text(disPokemon.description);
              div.append(header);
              div.append(namer);
              div.append(species);
              div.append(height);
              div.append(weight);
              div.append(desc);

              var button = $('<button>').text("Click me to go back!")
              button.click(function(e) {
                console.log(e);
                div.empty();
                $('#pokemon').show();
              });
              div.append(button);

              $('body').append(div);
            });
        });
      })

    })
    .fail(function(xhr, status, error) {

    });

};

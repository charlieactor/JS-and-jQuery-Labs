$('#newPokemon').click(function(e) {
  console.log(e);
  $('#pokemon').hide();
  $('#newPokemon').hide();
  makeNewPokemon();
});




function makeNewPokemon() {
  var div = $('<div>');
  var form = $('<form>');
  var name = $('<input>').attr('type', 'text').attr('name', 'name').attr('placeholder', 'Name');
  var height = $('<input>').attr('type', 'text').attr('name', 'height').attr('placeholder', 'Height');
  var weight = $('<input>').attr('type', 'text').attr('name', 'weight').attr('placeholder', 'Weight');
  var exp = $('<input>').attr('type', 'text').attr('name', 'exp').attr('placeholder', 'Experience');
  var image = $('<input>').attr('type', 'text').attr('name', 'img').attr('placeholder', 'Image Link');
  var description = $('<input>').attr('type', 'text').attr('name', 'description').attr('placeholder', 'Description');
  var pokeId = $('<input>').attr('type', 'text').attr('name', 'pokeId').attr('placeholder', 'pokeId');
  var submit = $('<input>').attr('name', 'submit').attr('type', 'submit').attr('value', "Make this Pokemon!")
    .attr('id', 'submit');
  form.append(pokeId);
  form.append(name);
  form.append(height);
  form.append(weight);
  form.append(image);
  form.append(description);
  form.append(submit);
  div.append(form);
  $('body').append(div);
  $('#submit').click(function(e) {
    e.preventDefault();
    var newPokeArray = $('form').serializeArray();
    var newPoke = {};
    newPokeArray.forEach(function(input, idx) {
      newPoke[input.name] = input.value;
      console.log(newPoke);
    });
    $.ajax({
      type: "POST",
      url: 'http://52.25.225.137:8080/pokemon/data/poke',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(newPoke)
    }).done(function(data) {
      div.empty();
      $('#pokemon').empty();
      main();

    })
  });
}

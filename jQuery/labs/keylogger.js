var doc = $(document);

var momo = '';
doc.keydown(function(e) {
  if (e.which >= 32 && e.which <= 122) {
    momo += e.key;
  } else if (e.which == 8) {
    momo = momo.substr(0, momo.length - 1);
  } else if (e.which > 187 && e.which < 191){
    momo += e.key;
  }
  console.log(momo);
  connorsFunc(momo);
});

function connorsFunc(str) {
  var divy = $('#charliesDiv');
  divy.text(str);
}

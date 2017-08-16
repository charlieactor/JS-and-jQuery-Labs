var doc = $(document);

doc.ready(function() {
  console.log("document is ready");
});

$('#submitbutton').click(function(e) {
e.preventDefault();

var allVals = $(contact).serializeArray();
var p={} ;
  $(allVals).each(function() {
    p[this.name]= this.value;
    console.log(this.name);
    console.log(p);
    });
  var booly = true;
  booly = verifyFormData(p.fname,p.lname,p.street,p.city,p.state,p.zip);
  console.log(p.fname);
  console.log(booly);
  if(booly===true) {
    var Obj= $('<h3>');
    $('body').append(Obj.text(p.fname +" " + p.lname + " " + p.street + " " + p.city + " " + p.state + " " + p.zip));

    $('form').remove();
  }
  else {
    var ul=$('<ul>');
    booly.forEach(function(value, idx, array){
      var li = $('<li>');
      li.text(value);
      ul.append(li);
    })
    $('body').append(ul);
  }
});

function verifyFormData(fname,lname,street,city,state,zip) {
  var errors=[];
if (fname==""||lname==""||street==""||city==""||state==""||zip=="") {
  //alert user
  console.log(fname);
  console.log(lname);
  errors.push("hey you left a blank space baby, ill write your name!");

}
  if ((zip.length==5 && !isNaN(Number(zip)))&&(state.length==2)) {
        errors = true;
    }
    else {
   if (zip.length!=5 || isNaN(Number(zip))) {
        errors.push("Zip is supah wrong");
  }
  if(state.length!=2) {
    errors.push("Your state is supah wrong");
  }

}
return errors;
};

function toRna(nucleo) {
  var nucleoString = '';
  if (nucleo.length == 1) {
  switch(nucleo) {
    case "G": return "C"
              break;
    case "C": return "G"
              break;
    case "T": return "A"
              break;
    case "A": return "U"
              break;
    }
  }
  else {
    for (var i = 0; i < nucleo.length; i++) {
        switch (nucleo[i]) {
        case "G": nucleoString += "C"
                  continue;
        case "C": nucleoString += "G"
                  continue;
        case "T": nucleoString += "A"
                  continue;
        case "A": nucleoString += "U"
                  continue;
      }
    } return nucleoString;
  }
}

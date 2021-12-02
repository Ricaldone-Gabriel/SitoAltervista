function myFunction() {
  var x = document.getElementById("frm1");

  var base = x.elements[0].value;
  document.getElementById("base").innerHTML = base;

  var arrivo = x.elements[1].value;
  document.getElementById("arrivo").innerHTML = arrivo;

  document.getElementById("demo").innerHTML = Dislivello(base, arrivo);
}

function Dislivello(h1, h2) {
  return h1 * h2;
}

/*function Maggiore() {
    var base = x.elements[0].value;
    document.getElementById("base").innerHTML = base;
  
    var arrivo = x.elements[1].value;
    document.getElementById("arrivo").innerHTML = arrivo;

    var base1 = x.elements[2].value;
    document.getElementById("base1").innerHTML = base1;

    document.getElementById("demo").innerHTML = Maggiore1(base, arrivo, base1);
}

function Maggiore1(h1,h2,h3) {
    var max = -10000000000000;
    if(h1 > max){
        max = h1;
    }

    if(h2 > max){
        max = h2;
    }

    if(h3 > max){
        max = h3;
    }
    return max;
}*/

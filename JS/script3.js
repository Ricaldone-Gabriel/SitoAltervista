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

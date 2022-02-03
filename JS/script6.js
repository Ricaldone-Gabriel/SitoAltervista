let start = Date.now();

function count() {
  document.getElementById("mioTempo").innerHTML =
    Date.now() - start + "millisecondi";
  document.getElementbyId("miodiv").style.backgroundcolor = "red";
  document.getElementbyId("miodiv").style.border = "5px outset black";
}

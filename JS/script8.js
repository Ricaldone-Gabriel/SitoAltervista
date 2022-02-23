
function accelera() {
  let a = document.getElementById("A");
  setInterval(function () {
    y = parseInt(a.offsetLeft);
    y = y + 20;
    a.style.left = y;
    x = parseInt(a.offsetTop);
    x = x + 10;
    a.style.top = x;
  }, 500);
}

function colori() {
  let b = document.getElementById("B");
  setInterval(function () {
    let rgb =
      "rgb(" +
      parseInt(Math.random() * 256) +
      "," +
      parseInt(Math.random() * 256) +
      "," +
      parseInt(Math.random() * 256) +
      ")";
    b.style.backgroundColor = rgb;
  }, 500);
}
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

function accelera() {
  let a = document.getElementById("A");
  setInterval(function () {
    a.style.top += 5;
  }, 500);
}

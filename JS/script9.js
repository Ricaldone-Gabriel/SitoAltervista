let mioarraytempi = [];

let tempoiniziale = Date.now();

function tempo() {
    let tempodalclick = Date.now() - tempoiniziale;
    mioarraytempi.push(tempodalclick);
    stampaArray();
}
function stampaArray() {
    document.getElementById("out").innerHTML += mioarraytempi.toString() + " ";
    if (mioarraytempi[0] <= 2000) {
        document.getElementById("divbello").style.backgroundColor = "red";
    } else {
        document.getElementById("divbello").style.backgroundColor = "green";
    }
}
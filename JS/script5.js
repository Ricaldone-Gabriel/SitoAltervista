let dado = 0;
let tmp = "";
let conta6 = 0;
document.write("<br><br><br><br><br><br><br><br><br>");
for (let i = 1; i < 1001; i++) {
    dado = Math.round((Math.random() * 5) + 1);
    if (dado == 6) {
        // devo stamparlo in rosso
        conta6++;
        document.write("<font color = red>" + dado + "</font> ");
    }
    else {
        // lo stampo in nero
        document.write("<font color =black>" + dado + "</font> ");
    }

    if (i % 100 == 0) {
        document.write("<br>");
    }
}
document.write("<br>Il numero 6 è uscito " + conta6 + " volte");
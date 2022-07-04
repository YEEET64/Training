neuZahl();
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var Zufall;
var ZahlVorher;
function neuZahl() {
  ZahlVorher = Zufall;
  do {
    Zufall = getRandomInt(11)
  } while (Zufall == ZahlVorher)
  document.getElementById("number").innerHTML = Zufall;
}

function hoeher(){
  neuZahl();
}

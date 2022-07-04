Zufall();
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var Zufall;
var ZahlVorher;
function Zufall() {
  ZahlVorher = Zufall;
  do {
    Zufall = getRandomInt(11)
  } while (Zufall == ZahlVorher)
  document.getElementById("number").innerHTML = Zufall;
}

function hoeher(){
  Zufall();
}

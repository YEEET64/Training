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
  document.getElementById("number").innerHTML = "vorher " + ZahlVorher;
  document.getElementById("nextnumber").innerHTML = "neu " + Zufall;
}

function hoeher(){
  neuZahl();
  if (Zufall > ZahlVorher) {
    document.getElementById("answer").innerHTML = "richtig";
  } else {
     document.getElementById("answer").innerHTML = "falsch";
  }
}
function tiefer(){
  neuZahl();
  if (Zufall < ZahlVorher) {
    document.getElementById("answer").innerHTML = "richtig";
  } else {
     document.getElementById("answer").innerHTML = "falsch";
  }
}

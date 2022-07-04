neuZahl();
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var Zufall;
var ZahlVorher;
var Score = 0;
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
    Score++;
    document.getElementById("score").innerHTML = Score;
  } else {
     document.getElementById("answer").innerHTML = "falsch";
     Score = 0;
     document.getElementById("score").innerHTML = Score;
  }
}
function tiefer(){
  neuZahl();
  if (Zufall < ZahlVorher) {
    document.getElementById("answer").innerHTML = "richtig";
    Score++;
    document.getElementById("score").innerHTML = Score;
  } else {
     document.getElementById("answer").innerHTML = "falsch";
     Score = 0;
     document.getElementById("score").innerHTML = Score;
  }
}

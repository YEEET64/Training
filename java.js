function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var Zufall = getRandomInt(11);
document.getElementById("number").value = Zufall;

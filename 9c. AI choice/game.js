// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
  numbers: 0,
  wins: 0,
  draw: 0
};

const game = {
  playerHand: "",
  aiHand: ""
};
const hands = [...document.querySelectorAll(".select img")];
function handSelection() {
  game.playerHand = this.dataset.option;
  console.log(game.playerHand);
  hands.forEach(hand => (hand.style.boxShadow = ""));
  this.style.boxShadow = "0 0 0 4px red";
}
function aiChoice() {
  return hands[Math.floor(Math.random() * 3)].dataset.option;
}
function startGame() {
  if (!game.playerHand) {
    alert("Wybierz dłoń !");
    return;
  }
  game.aiHand = aiChoice();
}
hands.forEach(hand => {
  hand.addEventListener("click", handSelection);
});
document.querySelector(".start").addEventListener("click", startGame);

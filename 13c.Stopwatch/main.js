const btnStart = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const panel = document.querySelector(".time div");
let idI;

let time = 0;
let active = false;
function timer() {
  if (!active) {
    active = !active;
    btnStart.textContent = "Pauza";
    idI = setInterval(start, 10);
  } else {
    active = !active;
    btnStart.textContent = "Start";
    clearInterval(idI);
  }
}

function start() {
  time++;
  panel.textContent = (time / 100).toFixed(2);
}
const reset = () => {
  active = false;
  time = 0;
  panel.textContent = "---";
  btnStart.textContent = "Start";
  clearInterval(idI);
};
btnStart.addEventListener("click", timer);
btnReset.addEventListener("click", reset);

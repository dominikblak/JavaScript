let options = [];
const addBtn = document.querySelector(".add");
const resetBtn = document.querySelector(".clean");
const adviceBtn = document.querySelector(".showAdvice");
const optionsBtn = document.querySelector(".showOptions");
const input = document.querySelector("input");
const h1 = document.querySelector("h1");

const addOption = e => {
  e.preventDefault();
  newOption = input.value;
  if (input.value.length) {
    options.push(newOption);
    alert(`Dodałeś : ${newOption}`);
    input.value = "";
  }
  return;
};

const resetOption = e => {
  e.preventDefault();
  options = [];
};
const showOption = () => {
  if (options.length) {
    let index = Math.floor(Math.random() * options.length);
    h1.textContent = options[index];
  } else {
    h1.textContent = "nie mam żadnej rady dla Ciebie !";
  }
};
const showOptions = () => {
  const txt = "Oto możliwości ";
  let txt2 = "";
  if (options.length) {
    for (let i = 0; i < options.length; i++) {
      txt2 += ` ${options[i]} --`;
    }
    alert(txt + " " + txt2);
  } else {
    alert("Nie ma żadnej możliwości !");
  }
};

addBtn.addEventListener("click", addOption);
resetBtn.addEventListener("click", resetOption);
adviceBtn.addEventListener("click", showOption);
optionsBtn.addEventListener("click", showOptions);

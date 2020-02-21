const input = document.getElementById("pass");
const passwords = ["user", "wiosna", "Ania"];
const div = document.querySelector(".message");
const messages = [
  "wyjechałam na zawsze",
  "piękna pora roku",
  "fajny styl masz"
];

input.addEventListener("input", e => {
  //   console.log(e.target.value);
  const text = e.target.value;
  div.textContent = "";

  passwords.forEach((password, index) => {
    if (password === text) {
      div.textContent = messages[index];
      e.target.value = "";
    }
  });
});

input.addEventListener("focus", e => {
  e.target.classList.add("active");
});
input.addEventListener("blur", e => {
  e.target.classList.remove("active");
});

// if (password === e.target.value) {
//   div.textContent = message;
// } else {
//   div.textContent = "";
// }
// });

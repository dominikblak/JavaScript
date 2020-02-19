const input = document.getElementById("pass");
const password = "user";
const div = document.querySelector(".message");
const message = "wyjechałam na zawsze";

input.addEventListener("input", e => {
  //   console.log(e.target.value);
  if (password === e.target.value) {
    div.textContent = message;
  } else {
    div.textContent = "";
  }
});

input.addEventListener("focus", e => {
  e.target.classList.add("active");
});
input.addEventListener("blur", e => {
  e.target.classList.remove("active");
});

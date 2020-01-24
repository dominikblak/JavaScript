const btn = document.querySelector("button");
const liItems = document.querySelectorAll("li");
let font = 10;

btn.addEventListener("click", function() {
  font++;
  for (let i = 0; i < liItems.length; i++) {
    liItems[i].style.display = "block";
    liItems[i].style.fontSize = `${font}px`;
  }
});

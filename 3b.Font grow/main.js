const btn = document.querySelector("button");
const liItems = document.querySelectorAll("li");
let font = 10;

btn.addEventListener("click", function() {
  liItems.forEach(liItem => {
    liItem.style.display = "block";
    liItem.style.fontSize = font + "px";
  });
  font++;
});

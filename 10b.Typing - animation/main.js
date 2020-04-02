const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis cumque amet tempora, officiis praesentium? Pariatur consequuntur fugit hic sapiente laboriosam debitis impedit eum voluptate, deleniti facere asperiores, distinctio eveniet? ";

let indexText = 0;
const time = 40;
const addLeter = () => {
  spnText.textContent += txt[indexText];
  indexText++;
  if (indexText === txt.length) clearInterval(indexTyping);
};
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
const indexTyping = setInterval(addLeter, time);
setInterval(cursorAnimation, 400);

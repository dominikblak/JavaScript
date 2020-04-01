const spnText = document.querySelector(".text");
const txt =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis cumque amet tempora, officiis praesentium? Pariatur consequuntur fugit hic sapiente laboriosam debitis impedit eum voluptate, deleniti facere asperiores, distinctio eveniet? ";

let indexText = 0;
const time = 40;
const addLeter = () => {
  spnText.textContent += txt[indexText];
  indexText++;
  if (indexText === txt.length) clearInterval(indexTyping);
};
const indexTyping = setInterval(addLeter, time);

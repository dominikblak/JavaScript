const toDoList = [];
const form = document.querySelector("form");
const input = document.querySelector("input");
const taskNumbers = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const liElements = document.getElementsByClassName("task");

const removeTask = (e) => {
  const index = e.target.parentNode.id;
  toDoList.splice(index, 1);
  renderList();
  taskNumbers.textContent = toDoList.length;
};
const addTask = (e) => {
  e.preventDefault();
  const taskName = input.value;
  if (taskName === "") return;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = taskName + " <button>Usuń</button>";
  toDoList.push(task);
  taskNumbers.textContent = toDoList.length;
  renderList();
  input.value = "";
  task.querySelector("button").addEventListener("click", removeTask);
};
const renderList = (e) => {
  ul.textContent = "";
  toDoList.forEach((element, index) => {
    element.id = index;
    ul.appendChild(element);
    taskNumbers.textContent = toDoList.length;
  });
};
const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = toDoList.filter((li) =>
    li.firstChild.textContent.toLowerCase().includes(searchText)
  );
  ul.textContent = "";
  tasks.forEach((li) => ul.appendChild(li));
};

input.addEventListener("input", searchTask);
form.addEventListener("submit", addTask);

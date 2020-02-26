const btn = document.querySelector("button");
const names = [
  "Jagienka",
  "Dobrawa (Dobrusia)",
  "Daria",
  "Asia",
  "Kira",
  "Marysia",
  "Anastazja",
  "Kasia"
];

const prefixs = [
  "Wydaje mi się",
  "Mam wrażenie",
  "Szczerze powiedziawszy, myślę",
  "Szczerze uważam",
  "Na 100% twierdzę",
  "Jestem pewien"
];
const div = document.querySelector("div");

const nameGenerator = () => {
  const indexName = Math.floor(Math.random() * names.length);
  //   const indexPrefixs = Math.floor(Math.random() * prefixs.length);
  //   div.textContent = `${prefixs[indexPrefixs]}że najlepsze imie to ${names[indexName]}`;
  div.textContent = `${
    prefixs[Math.floor(Math.random() * prefixs.length)]
  }że najlepsze imie to ${names[indexName]}`;
};

btn.addEventListener("click", nameGenerator);

// Nie zawsze chcemy liczbę losowaną od zera do ...
//Czasami chcemy od do gdzie pierwsza wartość nie jest zerem


Math.random() * 7 // od 0 do 7 (bez 7)

// od do
//od 4 do 6 (bez 6) - > np. 4.3246453, 5.6755434
// x >=4 i x < 6
Math.random() * (6 - 4) + 4;

// Funkcja uniwersalna
const numberRandom = (min, max) => {
 const number = Math.random() * (max - min) + min
 return number;
}

// od do (liczba całkowita)
// od 4 do 6 (wliczając) - > 4,5,6 
// x >=4 i x <= 6

Math.floor(Math.random() * (6 - 4 + 1) + 4);

// const numberRandomInt = (min, max) => {
//  const number = Math.floor(Math.random() * (max - min + 1) + min);
//  return number;
// }

const numberRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

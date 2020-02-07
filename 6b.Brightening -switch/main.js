/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;
let flag = false;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = e => {
  // console.log(e.keyCode, e.which);
  // 38 - strzałka do góry
  // 40 - strzalka w dół

  // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0))
  //tutaj twój kod
  // wersja 1 - instrukcja if
  // wersja 2 - instrukcja switch
  let key = e.keyCode;
  switch (key) {
    case 38:
      if (red < 256) {
        red++;
        green++;
        blue++;
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        console.log(red, green, blue);
        break;
      }

    case 40:
      if (red > 0) {
        red--;
        green--;
        blue--;
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        console.log(red, green, blue);
        break;
      }
  }
};

window.addEventListener("keydown", changeColor);

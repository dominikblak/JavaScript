const endTime = new Date("2028-05-22 19:26:00").getTime();

const spanD = document.querySelector("span.d");
const spanH = document.querySelector("span.h");
const spanM = document.querySelector("span.m");
const spanS = document.querySelector("span.s");
setInterval(() => {
  const nowTime = new Date().getTime();
  //   const time = Math.floor((endTime - nowTime) / 1000);
  const time = endTime - nowTime;
  let days = Math.floor(
    endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)
  );
  days = days < 10 ? `0${days}` : `${days}`;
  let hours =
    Math.floor(endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24;
  hours = hours < 10 ? `0${hours}` : `${hours}`;
  let minutes = Math.floor(
    (endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60
  );
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let secs = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
  secs = secs < 10 ? `0${secs}` : `${secs}`;
  spanD.textContent = days;
  spanH.textContent = hours;
  spanM.textContent = minutes;
  spanS.textContent = secs;
}, 1000);

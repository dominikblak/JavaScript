const clock = () => {
  const dataandtime = new Date();
  const time = dataandtime.toLocaleTimeString();

  document.querySelector(".clock span").textContent = time;
};

setInterval(clock, 1000);
const dataandtime2 = new Date();

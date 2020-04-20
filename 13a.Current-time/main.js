const clock = () => {
  const time = new Date();
  const seconds =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

  document.querySelector(
    ".clock span"
  ).textContent = `${hours}:${minutes}:${seconds}`;
};
setInterval(clock, 1000);

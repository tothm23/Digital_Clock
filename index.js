const text = document.getElementById("clock");

window.setInterval(() => {
  const date = new Date();
  text.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);

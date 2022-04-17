//dinamic Import permiten separar funcionaliad para ser llamadas cuando las necesitamos
//de esta forma ahorramos mucho consumo de red por no cargar codigo innecesario al comienzo
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
  const module = await import("./file.js");
  module.hello();
});

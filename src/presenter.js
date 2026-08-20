import sumar from "./sumador.js";
import multiplicar from "./multiplicador.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const multiplicarButton = document.querySelector("#multiplicar-button");
const limpiarButton = document.querySelector("#limpiar-button");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  ("Para no recargar formularios, es decir, si busca sumar dos números, no recargará la página y se mostrará el resultado en el div.");

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

multiplicarButton.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});

limpiarButton.addEventListener("click", (event) => {
  event.preventDefault();

  div.innerHTML = "";
  first.value = "";
  second.value = "";
});

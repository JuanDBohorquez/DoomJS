let figureSelected;

function calcularPerimetro(figure) {
  figureSelected = figure;
  showInputModal("Perímetro");
}

function calcularArea(figure) {
  figureSelected = figure;
  showInputModal("Área");
}

function showInputModal(title) {
    let modal = document.getElementById("modal");
    let figureTitle = document.getElementById("figure-title");
    let inputContainer = document.getElementById("input-container");

  figureTitle.textContent = title;
  inputContainer.innerHTML = "";

  if (figureSelected === "circulo") {
    inputContainer.innerHTML = `
      <label for="radio">Radio:</label>
      <input type="number" id="radio">
    `;
  } else if (figureSelected === "triangulo") {
    inputContainer.innerHTML = `
      <label for="base">Base:</label>
      <input type="number" id="base">

      <label for="altura">Altura:</label>
      <input type="number" id="altura">
    `;
  } else if (figureSelected === "rectangulo") {
    inputContainer.innerHTML = `
      <label for="lado1">Lado 1:</label>
      <input type="number" id="lado1">

      <label for="lado2">Lado 2:</label>
      <input type="number" id="lado2">
    `;
  } else if (figureSelected === "cuadrado") {
    inputContainer.innerHTML = `
      <label for="lado">Lado:</label>
      <input type="number" id="lado">
    `;
  }

  modal.style.display = "block";
}

function calcularResultado() {
    let modal = document.getElementById("modal");
    let resultado;

  if (figureSelected === "circulo") {
    let radio = parseFloat(document.getElementById("radio").value);
    resultado = 2 * Math.PI * radio;
  } else if (figureSelected === "triangulo") {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    resultado = (base * altura) / 2;
  } else if (figureSelected === "rectangulo") {
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);
    resultado = 2 * (lado1 + lado2);
  } else if (figureSelected === "cuadrado") {
    let lado = parseFloat(document.getElementById("lado").value);
    resultado = 4 * lado;
  }

  alert("El resultado es: " + resultado);

  modal.style.display = "none";
}

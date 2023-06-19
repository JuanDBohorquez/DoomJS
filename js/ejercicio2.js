function convertirTemperatura() {
  let temperatura = parseFloat(document.getElementById("temperatura").value);
  let seleccionOrigen = document.getElementById("seleccionOrigen").value;
  let seleccionDestino = document.getElementById("seleccionDestino").value;

  let resultado;

  if (seleccionOrigen === "celsius") {
    if (seleccionDestino === "fahrenheit") {
      resultado = (temperatura * 9 / 5) + 32;
    } else if (seleccionDestino === "kelvin") {
      resultado = temperatura + 273.15;
    } else {
      resultado = temperatura;
    }
  } else if (seleccionOrigen === "fahrenheit") {
    if (seleccionDestino === "celsius") {
      resultado = (temperatura - 32) * 5 / 9;
    } else if (seleccionDestino === "kelvin") {
      resultado = (temperatura + 459.67) * 5 / 9;
    } else {
      resultado = temperatura;
    }
  } else if (seleccionOrigen === "kelvin") {
    if (seleccionDestino === "celsius") {
      resultado = temperatura - 273.15;
    } else if (seleccionDestino === "fahrenheit") {
      resultado = (temperatura * 9 / 5) - 459.67;
    } else {
      resultado = temperatura;
    }
  }

  alert("El resultado de la conversión es: " + resultado);
}

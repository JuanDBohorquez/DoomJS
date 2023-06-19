function realizarOperacion() {
  let palabra = document.getElementById("palabra").value;
  let opcion = document.getElementById("opcion").value;

  let resultado;

  if (opcion === "longitud") {
    resultado = palabra.length;
  } else if (opcion === "mayusculas") {
    resultado = palabra.toUpperCase();
  } else if (opcion === "minusculas") {
    resultado = palabra.toLowerCase();
  } else if (opcion === "primer_caracter") {
    resultado = palabra.charAt(0);
  }

  alert("El resultado es: " + resultado);

  return false; 
}

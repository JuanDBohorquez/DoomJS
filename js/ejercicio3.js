function determinarTipoTriangulo() {
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);
    let lado3 = parseFloat(document.getElementById("lado3").value);
  
    let resultado;
  
    if (lado1 === lado2 && lado2 === lado3) {
      resultado = "Triangulo Equilatero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      resultado = "Triangulo Isosceles";
    } else {
      resultado = "Triangulo Escaleno";
    }
  
    alert("El triangulo es de tipo: " + resultado);
  
    return false; 
  }
  
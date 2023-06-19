function consultarString() {
    let palabra = prompt("Ingrese una palabra:");
    
    let opcion = prompt("Seleccione una opción:\n1. Longitud de la palabra\n2. Palabra en mayúsculas\n3. Palabra en minúsculas\n4. Primer carácter de la palabra");
    
    switch(opcion) {
      case "1":
        alert("Longitud de la palabra: " + palabra.length);
        break;
      case "2":
        alert("Palabra en mayúsculas: " + palabra.toUpperCase());
        break;
      case "3":
        alert("Palabra en minúsculas: " + palabra.toLowerCase());
        break;
      case "4":
        alert("Primer carácter de la palabra: " + palabra.charAt(0));
        break;
      default:
        alert("Opción inválida");
    }
  }
  
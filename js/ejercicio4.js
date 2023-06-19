function verificarInstructor() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let actividad = document.getElementById("actividad").value;
  
    let respuesta;
  
    if (nombre === "juano" && apellido === "bohorquez" && actividad === "AnalisisBD") {
      respuesta = "La respuesta es correcta";
    } else {
      respuesta = "La respuesta es incorrecta";
    }
  
    alert(respuesta);
  
    return false; 
  }
  
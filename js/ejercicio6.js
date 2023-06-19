function validarFormulario() {
    let tipoDocumento = document.getElementById("tipoDocumento").value;
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let correoElectronico = document.getElementById("correoElectronico").value;
    let password = document.getElementById("password").value;
    let confirmarPassword = document.getElementById("confirmarPassword").value;
    let terminosUso = document.getElementById("terminosUso").checked;
 
    if (
      tipoDocumento === "" ||
      numeroDocumento === "" ||
      nombre === "" ||
      apellido === "" ||
      fechaNacimiento === "" ||
      correoElectronico === "" ||
      password === "" ||
      confirmarPassword === "" ||
      !terminosUso
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }
  
    if (numeroDocumento.length < 5) {
      alert("El No. documento debe tener al menos 5 caracteres");
      return;
    }
  
    let alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
    if (!alphanumericRegex.test(nombre) || !alphanumericRegex.test(apellido)) {
      alert("El nombre y apellido deben contener caracteres alfanuméricos");
      return;
    }
  
    let fechaActual = new Date();
    let fechaLimite = new Date();
    fechaLimite.setFullYear(fechaActual.getFullYear() - 18);
    if (new Date(fechaNacimiento) > fechaLimite) {
      alert("Debes ser mayor de 18 años para registrarte");
      return;
    }

    if (!correoElectronico.endsWith("@misena.edu.co")) {
      alert("El correo electrónico debe tener el dominio @misena.edu.co");
      return;
    }

    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,}$/;
    if (!passwordRegex.test(password)) {
      alert("La contraseña debe incluir al menos una letra mayúscula, una letra minúscula, un número, un carácter y tener al menos 10 caracteres");
      return;
    }

    if (password !== confirmarPassword) {
      alert("La contraseña y su confirmación no coinciden");
      return;
    }

    alert("Formulario enviado correctamente");
  }
  
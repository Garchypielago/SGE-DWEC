let estado = -1;

function comenzar() {
  if (estado != -1) {
    console.log("Ya hemos saludado, se cancela");
  } else {
    estado = setInterval(() => {
      document.getElementById("saludos").show();
    }, 5000);
  }
}

function parar() {
  if (estado != -1) {
    document.getElementById("saludos").close();
    clearInterval(estado);
    estado = -1;
  } else {
    console.log("No hay saludo a parar");
  }
}

// ej01
const DNInput = document.getElementById('DNI');
const DNItext = document.getElementById('DNIletras');

const Letras = "TRWAGMYFPDXBNJZSQVHLCKE"

let intervaloDNI = null;

let DNIs = "";

function empezarDNI() {
  intervaloDNI = setInterval(guardarDNI, 10000);
}

function guardarDNI() {
  let DNIval = DNInput.value;

    if (DNIval.length == 8 && Number.isInteger(parseInt(DNIval))) {

      const letraDNI = Letras[parseInt(DNIval) % 23];

      DNIs = DNIs.concat(DNIval + letraDNI + "\n");

      clearInterval(intervaloDNI);
      empezarDNI();

    } else if (DNIval == "-1") {

      clearInterval(intervaloDNI);
      imprimirDNI();

    } else {

      DNIs = DNIs.concat(DNIval + " no es un número DNI válido.\n");
      clearInterval(intervaloDNI);
      empezarDNI();

    }
  DNInput.value = "";
}

function imprimirDNI() {
  DNItext.innerText = DNIs;
}

// ej02
const Textfecha = document.getElementById('fecha');

let intervaloFecha = null;

function empezarFecha() {
  intervaloFecha = setInterval(imprimirFecha, 2000);
}
function imprimirFecha() {
  Textfecha.innerText = new Date();
  clearInterval(intervaloDNI);
}
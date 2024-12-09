
// para ver el rago de los precios
const rangoPrecio = document.getElementById('productPrice');
const precioSeleccionado = document.getElementById('priceValue');

rangoPrecio.addEventListener('input', function() {
    precioSeleccionado.textContent = rangoPrecio.value + "€";
});


// boton reset
document.getElementById("reset").addEventListener("click", () => {
    resetForm();
})
let formulario;
const formularioConCosas = document.getElementById("productForm");

document.addEventListener('DOMContentLoaded', function() {
    formulario = document.getElementById("productForm").innerHTML;

});

function resetForm(){
    formularioConCosas.innerHTML = formulario;
    document.getElementById("all").addEventListener("click", () => {
        selectAll();
    })
    document.getElementById("reset").addEventListener("click", () => {
        resetForm();
    })
} 


// selecc deselecc checkbox
document.getElementById("all").addEventListener("click", () => {
    selectAll();
})
function selectAll() {
    let cambio = true;
    document.querySelectorAll("input[name=accessory]").forEach(element => {
        if(element.checked == true){
            cambio=false
        }
        });
    document.querySelectorAll("input[name=accessory]").forEach(element => {
        element.checked = cambio;
        });

    }
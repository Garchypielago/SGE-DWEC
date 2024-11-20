// Obtener el rango y el elemento donde mostrar el valor
const priceRange = document.getElementById('productPrice');
const priceValue = document.getElementById('priceValue');

// Actualizar el valor cuando se mueva la barra
priceRange.addEventListener('input', function() {
    priceValue.textContent = priceRange.value + "€"; // Actualiza el texto con el valor
});
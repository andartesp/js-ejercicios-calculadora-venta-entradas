// venta-entradas.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("ticket-form");
    const resultDiv = document.getElementById("ticket-price");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const age = parseInt(document.getElementById("age").value);

        if (isNaN(age) || age <= 0) {
            resultDiv.textContent = "Por favor, ingrese una edad válida.";
            return;
        }

        let price;
        if (age < 12) {
            price = "Gratis";
        } else if (age >= 12 && age <= 18) {
            price = "$5 (Precio reducido)";
        } else {
            price = "$10 (Precio completo)";
        }

        resultDiv.textContent = `Precio de la entrada: ${price}`;
    });
});

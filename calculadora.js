document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calculator-form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const operation = document.getElementById("operation").value;

        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = "Por favor, ingrese números válidos.";
            return;
        }

        let result;
        switch (operation) {
            case "suma":
                result = num1 + num2;
                break;
            case "resta":
                result = num1 - num2;
                break;
            case "multiplicacion":
                result = num1 * num2;
                break;
            case "division":
                if (num2 === 0) {
                    resultDiv.textContent = "No se puede dividir por cero.";
                    return;
                }
                result = num1 / num2;
                break;
            default:
                resultDiv.textContent = "Operación no válida.";
                return;
        }

        resultDiv.textContent = `Resultado: ${result}`;
    });
});

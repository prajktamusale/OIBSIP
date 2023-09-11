document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convert-button");
    const resultDisplay = document.getElementById("result");

    convertButton.addEventListener("click", function() {
        const inputTemperature = parseFloat(document.getElementById("temperature").value);
        const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
        let convertedTemperature;

        if (isNaN(inputTemperature)) {
            resultDisplay.textContent = "Please enter a valid temperature.";
            return;
        }

        switch (selectedUnit) {
            case "celsius":
                convertedTemperature = inputTemperature * 9/5 + 32;
                resultDisplay.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °F`;
                break;
            case "fahrenheit":
                convertedTemperature = (inputTemperature - 32) * 5/9;
                resultDisplay.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
                break;
            case "kelvin":
                convertedTemperature = inputTemperature - 273.15;
                resultDisplay.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
                break;
            default:
                resultDisplay.textContent = "Please select a unit.";
                break;
        }
    });
});

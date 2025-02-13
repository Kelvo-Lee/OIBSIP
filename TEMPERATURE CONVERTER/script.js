document.addEventListener('DOMContentLoaded', function () {
    const convertBtn = document.getElementById('convertBtn');
    const tempInput = document.getElementById('tempInput');
    const unitSelect = document.getElementById('unitSelect');
    const resultDiv = document.getElementById('result');

    convertBtn.addEventListener('click', function () {
        const tempValue = parseFloat(tempInput.value);
        const unit = unitSelect.value;

        if (isNaN(tempValue)) {
            resultDiv.innerHTML = 'Please enter a valid number for temperature.';
            return;
        }

        let convertedTemp;
        let resultText = '';

        if (unit === 'celsius') {
            convertedTemp = {
                fahrenheit: (tempValue * 9 / 5) + 32,
                kelvin: tempValue + 273.15
            };
            resultText = `
          ${tempValue} °C is equal to:<br>
          ${convertedTemp.fahrenheit.toFixed(2)} °F<br>
          ${convertedTemp.kelvin.toFixed(2)} K
        `;
        } else if (unit === 'fahrenheit') {
            convertedTemp = {
                celsius: (tempValue - 32) * 5 / 9,
                kelvin: (tempValue - 32) * 5 / 9 + 273.15
            };
            resultText = `
          ${tempValue} °F is equal to:<br>
          ${convertedTemp.celsius.toFixed(2)} °C<br>
          ${convertedTemp.kelvin.toFixed(2)} K
        `;
        } else if (unit === 'kelvin') {
            convertedTemp = {
                celsius: tempValue - 273.15,
                fahrenheit: (tempValue - 273.15) * 9 / 5 + 32
            };
            resultText = `
          ${tempValue} K is equal to:<br>
          ${convertedTemp.celsius.toFixed(2)} °C<br>
          ${convertedTemp.fahrenheit.toFixed(2)} °F
        `;
        }

        resultDiv.innerHTML = resultText;
    });
});
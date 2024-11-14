document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Previne o envio do formulário

        // Captura os valores dos campos de peso e altura
        const peso = parseFloat(document.querySelector('#peso').value);
        const altura = parseFloat(document.querySelector('#altura').value);

        // Converte os valores para números e calcula o IMC
        if (peso && altura) {
            const imc = (peso / (altura * altura)).toFixed(2);
            console.log(`Seu IMC é: ${imc}`);

            // Limpa os resultados anteriores
            document.getElementById('abaixo').textContent = '';
            document.getElementById('normal').textContent = '';
            document.getElementById('sobrepeso').textContent = '';
            document.getElementById('obesidade').textContent = '';

            // Define o intervalo de acordo com o IMC e exibe o resultado
            if (imc < 18.5) {
                document.getElementById('abaixo').textContent = ` - Seu IMC: ${imc}`;
            } else if (imc >= 18.5 && imc <= 24.9) {
                document.getElementById('normal').textContent = ` - Seu IMC: ${imc}`;
            } else if (imc >= 25 && imc <= 29.9) {
                document.getElementById('sobrepeso').textContent = ` - Seu IMC: ${imc}`;
            } else {
                document.getElementById('obesidade').textContent = ` - Seu IMC: ${imc}`;
            }

            // Chama a função updateBMIStatus para atualizar o status com cores
            updateBMIStatus(imc);
        } else {
            alert('Por favor, insira valores válidos de peso e altura.');
        }
    });

    function updateBMIStatus(bmi) {
        const statusDiv = document.getElementById("bmi-status");

        // Remove classes anteriores
        statusDiv.classList.remove("normal-weight", "underweight", "overweight", "obese");

        if (bmi < 18.5) {
            statusDiv.textContent = "Abaixo do peso";
            statusDiv.classList.add("underweight");
        } else if (bmi >= 18.5 && bmi < 24.9) {
            statusDiv.textContent = "Peso normal";
            statusDiv.classList.add("normal-weight");
        } else if (bmi >= 25 && bmi < 29.9) {
            statusDiv.textContent = "Sobrepeso";
            statusDiv.classList.add("overweight");
        } else {
            statusDiv.textContent = "Obeso";
            statusDiv.classList.add("obese");
        }
    }
});
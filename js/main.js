function calcularIMC(peso, altura) {
    if (peso <= 0 || altura <= 0) {
        console.log("Por favor, ingresa valores válidos para peso y altura.");
        alert("Por favor, ingresa valores válidos para peso y altura.");
        return;
    }
    const imc = peso / (altura * altura);
    if (imc < 18.5) {
        console.log(`Tu IMC es ${imc.toFixed(2)} - Bajo peso.`);
        alert(`Tu IMC es ${imc.toFixed(2)} - Bajo peso.`);
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log(`Tu IMC es ${imc.toFixed(2)} - Peso normal.`);
        alert(`Tu IMC es ${imc.toFixed(2)} - Peso normal.`);
    } else {
        console.log(`Tu IMC es ${imc.toFixed(2)} - Sobrepeso.`);
        alert(`Tu IMC es ${imc.toFixed(2)} - Sobrepeso.`);
    }
}
const peso = parseFloat(prompt("Ingresa tu peso en kilogramos (kg):"));
const altura = parseFloat(prompt("Ingresa tu altura en metros (m):"));
calcularIMC(peso, altura);
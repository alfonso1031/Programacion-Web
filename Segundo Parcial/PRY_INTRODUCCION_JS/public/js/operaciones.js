function sumar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 + num2;
    console.log("El resultado de la suma es: " + resultado);
    document.getElementById("resultado").innerText = "El resultado de la suma es: " + resultado;
}
function restar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 - num2;
    console.log("El resultado de la resta es: " + resultado);
    document.getElementById("resultado").innerText = "El resultado de la resta es: " + resultado;
}
function multiplicar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 * num2;
    console.log("El resultado de la multiplicación es: " + resultado);
    document.getElementById("resultado").innerText = "El resultado de la multiplicación es: " + resultado;
}
function dividir(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        console.log("Error: División por cero no permitida.");
        return;
    }
    let resultado = num1 / num2;
    console.log("El resultado de la división es: " + resultado);
    document.getElementById("resultado").innerText = "El resultado de la división es: " + resultado;
}
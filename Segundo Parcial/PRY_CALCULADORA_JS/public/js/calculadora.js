let numero_uno = "";
let numero_dos = "";
let operacion = "";

function agregarNumero(numero) {
    if (operacion == "") {
        numero_uno = numero_uno + numero;
        let txt_pantalla = document.getElementById("pantalla");
        txt_pantalla.value = numero_uno;
    }
    else {
        numero_dos = numero_dos + numero;
        let txt_pantalla = document.getElementById("pantalla");
        txt_pantalla.value = numero_dos;
    }
}

function agregarOperacion(op) {
    if (numero_uno !== "") {
        operacion = op;
    }
}

function calcular() {
    let n1 = parseInt(numero_uno);
    let n2 = parseInt(numero_dos);
    let resultado = 0;

    switch (operacion) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            if (n2 !== 0) {
                resultado = n1 / n2;
            } else {
                alert("No se puede dividir por cero");
                return;
            }
            break;
        default:
            alert("Operación no válida");
            return;
    }

    let txt_pantalla = document.getElementById("pantalla");
    txt_pantalla.value = resultado;
}
function calcularResultado() {
    if (numero_uno !== "" && numero_dos !== "" && operacion !== "") {
        calcular();
    } else {
        alert("Por favor, ingrese ambos números y una operación.");
    }
}   

function limpiarPantalla() {
    numero_uno = "";
    numero_dos = "";
    operacion = "";
    let txt_pantalla = document.getElementById("pantalla");
    txt_pantalla.value = "0";
}
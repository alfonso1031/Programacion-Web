function calcularGenero(arg) {
    let genero = arg.value;
    if (genero === "H" || genero === "h") {
        document.getElementById("p_genero").innerHTML = "Eres hombre";
    } else if (genero === "M" || genero === "m") {
        document.getElementById("p_genero").innerHTML = "Eres mujer";
    } else {
        document.getElementById("p_genero").innerHTML = "Género no especificado";
    }
}

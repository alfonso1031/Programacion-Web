function calcularEdad(arg) {
    let edad = arg.value;
    if (edad >= 18) {
        document.getElementById("p_edad").innerHTML = "Eres mayor de edad";
        document.getElementById("p_edad").classList.add("text-success");

    }else{
        document.getElementById("p_edad").innerHTML = "Eres menor de edad";
        document.getElementById("p_edad").classList.add("text-danger");
    }
}
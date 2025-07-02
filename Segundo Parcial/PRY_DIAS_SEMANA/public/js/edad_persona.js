function calcularEdad(arg){
    let edad = arg.value;
    let mensaje_edad = (edad >=18)?'Mayor de edad':'Menor de edad';
    let respuesta = document.getElementById("resultado");
    respuesta.innerHTML = mensaje_edad;
}
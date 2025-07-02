function calcularNota(){
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    
    let respuesta = document.getElementById("resultado");
    let promedio = ((nota1 + nota2 + nota3) / 3).toFixed(2);
    console.log(promedio);
    // switch(true){
    //     case (promedio >= 18 && promedio <= 20):
    //         respuesta.innerHTML = "Excelente";
    //         respuesta.className = "text-success";
    //         break;
    //     case (promedio >= 15 && promedio < 18):
    //         respuesta.innerHTML = "Aprobado";
    //         respuesta.className = "text-primary";
    //         break;
    //     case (promedio >= 14 && promedio < 15):
    //         respuesta.innerHTML = "Supletorio";
    //         respuesta.className = "text-warning";
    //         break;
    //     case (promedio < 14):
    //         respuesta.innerHTML = "Reprobado";
    //         respuesta.className = "text-danger";
    //         break;
    //     default:
    //         respuesta.innerHTML = "Error en el cálculo";
    //         respuesta.className = "text-danger";
    // }
    (promedio >= 18 && promedio <= 20) ? (respuesta.innerHTML = "Excelente", respuesta.className = "text-success") :
    (promedio >= 15 && promedio < 18) ? (respuesta.innerHTML = "Aprobado", respuesta.className = "text-primary") :
    (promedio >= 14 && promedio < 15) ? (respuesta.innerHTML = "Supletorio", respuesta.className = "text-warning") :
    (promedio < 14) ? (respuesta.innerHTML = "Reprobado", respuesta.className = "text-danger") : 
    (respuesta.innerHTML = "Error en el cálculo", respuesta.className = "text-danger");
}
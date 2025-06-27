function calcularHora(arg){
    let tiempo = arg.value;
    //separar el tiempo por :
    let partes = tiempo.split(":");
    let hora = partes[0];
    let minutos = partes[1];
    console.log(hora);

    if (hora >= 0 && hora < 12) {
        document.getElementById("p_hora").innerHTML = "Buenos días profesor David";
        document.getElementById("p_hora").classList.add("text-success");
    } else {
        document.getElementById("p_hora").innerHTML = "Buenas tardes profesor David";
        document.getElementById("p_hora").classList.add("text-warning");
    } 
}
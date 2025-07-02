function seleccionarDia(arg){
    let dia_semana=arg.value;
    let respuesta=document.getElementById("dia_seleccionado");
    switch(dia_semana){
        case 'lunes':
            respuesta.innerHTML="Hoy es lunes";
            respuesta.className="text-danger";
            break;
        case 'Martes':
            respuesta.innerHTML="Hoy es martes";
            respuesta.className="text-success";
            break;
        case 'Miercoles':
            respuesta.innerHTML="Hoy es miércoles";
            respuesta.className="text-primary";
            break;
        case 'Jueves':
            respuesta.innerHTML="Hoy es jueves";
            respuesta.className="text-warning";
            break;
        case 'Viernes':
            respuesta.innerHTML="Hoy es viernes";
            respuesta.className="text-info";
            break;
        case 'Sabado':
            respuesta.innerHTML="Hoy es sábado";
            respuesta.className="text-secondary";
            break;
        case 'Domingo':
            respuesta.innerHTML="Hoy es domingo";
            respuesta.className="text-dark";
            break;
        default:
            respuesta.hidden=true;
            break;
    }
}
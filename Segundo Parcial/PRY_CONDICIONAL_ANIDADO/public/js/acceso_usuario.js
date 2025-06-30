
let estado_usuario = false;
let r_activo = document.getElementById("radActivo");
let r_inactivo = document.getElementById("radInactivo");
let resultado = document.getElementById("resultado");

function seleccionarUsuario(arg) {
    let nombre_usuario = arg.value;
    seleccionarEstado(arg);

    //validar el tipo de usuario
    if (nombre_usuario === "admin") {
        if (estado_usuario === true) {
            resultado.innerHTML = "<h4 class='text-success'>Acceso al sistema</h4>";
            console.log("Usuario: " + nombre_usuario + " - Estado: " + estado_usuario);
        } else {
            resultado.innerHTML = "<h4 class='text-danger'>Usuario Administrador Inactivo</h4>";
            console.log("Usuario: " + nombre_usuario + " - Estado: " + estado_usuario);
        }
    } else {
        resultado.innerHTML = "<h4 class='text-danger'>Usuario NO Administrador</h4>";
        return;
    }

}

function seleccionarEstado(arg) {
    //if para verificar q este en chcked
    if (r_activo.checked) {
        estado_usuario = true;
        resultado.innerHTML = "<h4 class='text-success'>Usuario Activo</h4>";
    } else if (r_inactivo.checked) {
        estado_usuario = false;
        resultado.innerHTML = "<h4 class='text-danger'>Usuario Inactivo</h4>";
    } else {
        console.log("Usuario: " + nombre_usuario + " - Estado: " + estado_usuario);
        console.log("Usuario: " + nombre_usuario + " - Estado: No seleccionado");
        resultado.innerHTML = "<h4 class='text-danger'>Estado de usuario no seleccionado</h4>";
        return;
    }

}
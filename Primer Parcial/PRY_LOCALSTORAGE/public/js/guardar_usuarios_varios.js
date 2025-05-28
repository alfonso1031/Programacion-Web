function guardarDatosUsuarios() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;

    var datos_usuario = {
        nombre: nombre,
        apellido: apellido,
        email: email
    };

    localStorage.setItem("datos_usuario", JSON.stringify(datos_usuario));
    alert("Datos guardados correctamente.");
    location.reload();

       
}
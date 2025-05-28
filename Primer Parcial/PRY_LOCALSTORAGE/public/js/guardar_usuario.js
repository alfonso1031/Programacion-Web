function guardarUsuario() {
    var nombre_usuario = document.getElementById("nombre_usuario").value;
    localStorage.setItem("nombre_usuario", nombre_usuario);
    alert("Nombre de usuario guardado: " + nombre_usuario);
}
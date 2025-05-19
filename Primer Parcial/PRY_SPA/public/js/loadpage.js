fetch('./views/inicio.html')
    .then(res => res.text())
    .then(data => document.getElementById('contenedor_principal').innerHTML = data)

function cambiarPagina(url) {
    //url=views/nombre_stio.html
    fetch(url)
        .then(res => res.text())
        .then(data => document.getElementById('contenedor_principal').innerHTML = data)

}
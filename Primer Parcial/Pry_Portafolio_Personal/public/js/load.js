//cargar el archivo header.html
fetch('header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data)

//cargar el archivo footer.html
fetch('footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data)

function cargarPaginas(url){
    fetch(url)
        .then(response => response.text())
        .then(data => document.getElementById('main').innerHTML = data)
}

window.onload = () => cargarPaginas('index.html')

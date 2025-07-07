function mostrarNotas() {
    let ul_notas = document.getElementById("ul_notas");
    ul_notas.innerHTML = "";
    let notas = document.getElementById("notas").value;
    let cantidad = [notas];
    cantidad = cantidad[0].split(",");

    for (let i = 1; i < cantidad.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = `Nota  ${i} = ${cantidad[i]}`;
        ul_notas.appendChild(li);
        promedio();
    }
}
function agregar20(){
    let notas = document.getElementById("notas").value;
    let cantidad = [notas];
    cantidad = cantidad[0].split(",");
    cantidad.push("20");
    document.getElementById("notas").value = cantidad.join(",");
    let ul_notas = document.getElementById("ul_notas");
    let li = document.createElement("li");
    ul_notas.appendChild(li);
    li.innerHTML = `Nota  ${cantidad.length - 1} = 20`;
    promedio();
}
function promedio(){
    let notas = document.getElementById("notas").value;
    let cantidad = [notas];
    cantidad = cantidad[0].split(",");
    let suma = 0;

    for (let i = 0; i < cantidad.length; i++) {
        suma += parseFloat(cantidad[i]);
    }
    
    let promedio = suma / cantidad.length;
    let pPromedio = document.getElementById("promedio");
    pPromedio.innerHTML = `El promedio es: ${promedio.toFixed(2)}`;
}
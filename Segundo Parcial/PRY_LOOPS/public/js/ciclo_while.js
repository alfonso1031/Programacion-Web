// let nInicio = 0;
// let nFin = 0;
// let tabla = 0;
// let valorTabla = document.getElementById("tablaMultiplicar").value;

// $(".js-range-slider").ionRangeSlider({
//     type: "int",
//     min: 0,
//     max: 100,
//     from: 1,
//     to: 10,
//     grid: true,

//     onStart: function (data) {
//         valorTabla = document.getElementById("tablaMultiplicar").value;
//         console.log("Tabla: " + valorTabla + ", Inicio: " + data.from + ", Fin: " + data.to);
//         mostrarTabla(data.from, data.to, valorTabla);
//     },

//     onChange: function (data) {
//         valorTabla = document.getElementById("tablaMultiplicar").value;
//         console.log("Tabla: " + valorTabla + ", Inicio: " + data.from + ", Fin: " + data.to);
//         mostrarTabla(data.from, data.to, valorTabla);
//     }
// });
// function mostrarTabla(v_i, v_f, tabla) {
//     let ul_rango = document.getElementById("ul_rango");
//     console.log("Tabla: " + tabla + ", Inicio: " + v_i + ", Fin: " + v_f);
//     ul_rango.innerHTML = "";
//     let i = v_i;
//     while (i <= v_f) {
//         let li = document.createElement("li");
//         li.innerHTML = `${tabla} x ${i} = ${tabla * i}`;
//         ul_rango.appendChild(li);
//         i++;
//     }
// }


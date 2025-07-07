let persona ={
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    array: [1, 2, 3, 4, 5],
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
}
persona.nombre= "Pedro";
console.log(persona.nombre);

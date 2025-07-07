let estudiantes = [
    {
        nombre: "Ana",
        edad: 22,
        carrera: "Ingeniería",
        saludar: function() {
            console.log("Hola, soy " + this.nombre + " y estudio " + this.carrera);
        }
    },
    {
        nombre: "Luis",
        edad: 24,
        carrera: "Medicina",
        saludar: function() {
            console.log("Hola, soy " + this.nombre + " y estudio " + this.carrera);
        }
    },
    {
        nombre: "Marta",
        edad: 21,
        carrera: "Arquitectura",
        saludar: function() {
            console.log("Hola, soy " + this.nombre + " y estudio " + this.carrera);
        }
    }
]
console.log(estudiantes[0]); // Ana
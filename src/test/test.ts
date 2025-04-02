const saludar = (nombre: string): string =>
    `hola ${nombre}`;

console.log(saludar("juan"));



const multiplicar = (a: number, b: number): number => {
    return a * b;
}

console.log(multiplicar(4, 2));

const esMayorDeEdad = (edad: number): boolean => {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(esMayorDeEdad(15));


const crearSaludo = (saludo: string, nombre: string): string => (`${saludo}, ${nombre}!`);

console.log(crearSaludo("Buenos dias", "Carlos"));

// 🔹 Prueba la función
const saludoFormal = (saludo: string, nombre: string): string => {
    return crearSaludo(saludo, `estimado ${nombre}`);
}

console.log(saludoFormal("Buenos dias", "Carlos"));

const saludoCasual = (nombre: string): string =>
    `Hey ${nombre}`;

console.log(saludoCasual("Sofía"));

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const duplicados = numeros.map((numeros) => numeros * 2);
console.log(duplicados);

const pares = numeros.filter((numeros) => numeros % 2 === 0);
console.log(pares);

const sumaTotal = numeros.reduce((acum, numero) => acum + numero, 0);
console.log(sumaTotal);

const nombres = ["Juan", "Carlos", "Sofía", "Juan", "Carlos", "Sofía"];

const nombresConSaludo = nombres.map((nombre) => saludar(nombre));
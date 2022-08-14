const calculadora = require('./mate')

//Al ejecutralo mostrar un menú de opciones tipo switch
do{
    console.log('****************************');
    console.log('*BIENVENIDO A LA CALCULADORA');
    console.log('Tipos de operaciones');
    console.log('1. Suma');
    console.log('2. Resta');
    console.log('3. Multiplicación');
    console.log('4. División');
    console.log('5. Salir');
    res = console.log('Escribe la opción a realizar: ');
}while(res !='5')

let suma = calculadora.suma(n1,n2)
console.log(suma)

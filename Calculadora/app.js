const calculadora = require('./mate')
const interface = require('readline-sync')

//Al ejecutralo mostrar un menú de opciones tipo switch
do{
    console.log('****************************');
    console.log('*BIENVENIDO A LA CALCULADORA');
    console.log('Tipos de operaciones');
    console.log('1. Suma');
    console.log('2. Resta');
    console.log('3. Multiplicacion');
    console.log('4. Division');
    console.log('5. Salir');
    res = interface.question("Que operacion deseas realizar?, escribe el numero: ");

    if(res != "5"){
        const n1 = interface.question("Dame el primer numero: ");
        const n2 = interface.question("Dame el segundo numero: ");

        switch(res){
            case "1":
                let suma = parseInt(calculadora.suma(n1,n2));
                console.log("El resultado es: "+suma);
                console.log('****************************');
                break;
            case "2":
                let resta = parseInt(calculadora.resta(n1,n2));
                console.log("El resultado es: "+resta);
                console.log('****************************');
                break;
            case "3":
                let multi = parseInt(calculadora.multi(n1,n2));
                console.log("El resultado es: "+multi);
                console.log('****************************');
                break;
            case "4":
                let div = parseInt(calculadora.div(n1,n2));
                console.log("El resultado es: "+div);
                console.log('****************************');
                break;
            case "5":
                break;
        }
    }
}while(res != "5");
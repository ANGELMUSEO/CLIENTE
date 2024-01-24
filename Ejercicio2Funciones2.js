/**

Descripción:

Realiza un ejercicio en JavaScript que realice las siguientes funciones. Cada function
recibe un array de números como parámetro:

-Calcula la suma de los cuadrados de todos los elementos en el array.
-Encuentra y muestra en la consola el primer número par en el array.
-Crea un nuevo array que contenga el doble de cada número en el array original.


Para probarlo hay que meter desde consola 5 numeros
*/

function sumaCuadrados(datosArray){
    let totalDatos=0;
    for(let i=0;i<datosArray.length;i++){
        totalDatos+=(datosArray[i]*datosArray[i]);
    }
    return totalDatos;
}



//programa principal
var datosNumericos=[];
var resultado=0;


for(let i=0;i<5;i++){
    datosNumericos[i]=parseInt(prompt("Introduzca un valor "));
}
resultado=sumaCuadrados(datosNumericos);

document.write("la suma de los cuadrados es "+resultado+"<br><br>");
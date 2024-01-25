/**

Descripción:

Realiza un ejercicio en JavaScript que realice las siguientes funciones. Cada function
recibe un array de números como parámetro:

-Calcula la suma de los cuadrados de todos los elementos en el array.
-Encuentra y muestra en la consola el primer número par en el array.
-Crea un nuevo array que contenga el doble de cada número en el array original.

-Filtra los números mayores que 5 y menores que 15 en el array.
-Comprueba si todos los números en el array son mayores que 0.

Para probarlo hay que meter desde consola 5 numeros
*/


function filtrar1(arrayParametro){
    var arrayFiltrado=[];
    var posicionInsercion=0;
    for(var i=0;i<arrayParametro.length;i++){
        if(arrayParametro[i]>=5 &arrayParametro[i]<=15){
            arrayFiltrado[posicionInsercion]=arrayParametro[i];
            posicionInsercion++;
        }
    }

    mostrarArrayUnoDimension(arrayFiltrado);
}


function filtrar2(arrayParametro){
    var arrayFiltrado=[];
    for(var i=0;i<arrayParametro.length;i++){
        if(arrayParametro[i]>=5 &&arrayParametro[i]<=15){
            arrayFiltrado.push(arrayParametro[i]);
        }
    }
return arrayFiltrado;
}



function sumaCuadrados(datosArray){
    let totalDatos=0;
    for(let i=0;i<datosArray.length;i++){
        totalDatos+=(datosArray[i]*datosArray[i]);
    }
    return totalDatos;
}

function primerPar(datosArray){
    let encontrado=false;
    let primerNumeroPar=0;
    for(i=0;i<datosArray.length;i++){
        if((datosArray[i]%2==0)&(!encontrado)){
            primerNumeroPar=datosArray[i];
            encontrado=true;
        }
    }

    return primerNumeroPar;
}

function dobleEnArray(datosArray){
    let nuevoArray=[];
    for(i=0;i<datosArray.length;i++){
        nuevoArray[i]=datosArray[i]*2;
    } 
return nuevoArray;
}


function mostrarArrayUnoDimension(datosArray){
    for(let i=0;i<datosArray.length;i++){
        document.write(datosArray[i]+"--");
    }
}


function todoPositivo(arrayParametro){
    let todosMayoresCero=true;
    for(let i=0;i<arrayParametro.length;i++){
        if(arrayParametro[i]<=0){
            todosMayoresCero=false;
        }
    }
    return todosMayoresCero;
}




//programa principal
var datosNumericos=[];
var resultado=0;
var nuevo=[];


for(let i=0;i<5;i++){
    datosNumericos[i]=parseInt(prompt("Dame un numero "));
}

mostrarArrayUnoDimension(datosNumericos);
resultado=sumaCuadrados(datosNumericos);

document.write("la suma de los cuadrados es "+resultado+"<br><br>");

resultado=primerPar(datosNumericos);

if(resultado==0){
    document.write("No hay ningun numero par"+"<br><br>");

}else{
document.write("El primer par es "+resultado+"<br><br>");
}

nuevo=dobleEnArray(datosNumericos);
mostrarArrayUnoDimension(nuevo);

//probamos la funcion todosPositivoss

if(todoPositivo(datosNumericos)){
    document.write("<br>todos los valores son mayores de cero");
}else{
    document.write("<br>no son todos mayores de cero")
}

document.write("<BR>filtro1<br>")
filtrar1(datosNumericos);

document.write("<BR>filtro2<br>")
nuevo=filtrar2(datosNumericos);
mostrarArrayUnoDimension(nuevo);
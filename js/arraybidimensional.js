//Array con nombres ciudades y temperaturas

var temperaturas=new Array();
 temperaturas[0]=new Array("Oviedo","Gijón","Mieres");
temperaturas[1]=new Array();
temperaturas[2]=new Array();
temperaturas[3]=new Array();

var totalFila=0;
var totalCiudades=0;
var totalTemperaturaMañanaTarde=0;

for(var i=1;i<4;i++){
    for(var j=0;j<3;j++){
        temperaturas[i][j]=parseFloat(prompt("Introduzca la temperatura"));
    }
}



//calculado la media de mañana, tarde, noche

for(var i=1;i<temperaturas.length;i++){
    for(var j=0;j<temperaturas[0].length;j++){
        totalFila+=temperaturas[i][j];
    }
    document.write("La media de la fila es "+(totalFila/3)+"<br>");
    totalFila=0;
}

//calcule la media de las ciudades
for(var j=0;j<temperaturas[0].length;j++){
    for(var i=1;i<temperaturas.length;i++){
            totalCiudades+=temperaturas[i][j];
    }
    document.write("La media de "+temperaturas[0][j] + "es "+(totalCiudades/3)+"<br>");
    totalCiudades=0;
}

//La media de todas las temperaturas de la mañana con la noche

for(let i=1;i<temperaturas.length;i++){
    for(let j=0;j<temperaturas[0].length;j++){
        if(i%2!=0){
        totalTemperaturaMañanaTarde+=temperaturas[i][j];
        }
    }
}

document.write("La media de la mañana y tarde es "
+(totalTemperaturaMañanaTarde/(temperaturas[1].length+temperaturas[3].length)));
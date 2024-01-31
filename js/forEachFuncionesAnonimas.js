
var notas=[3,5,7,9,10];

/*
for(let i=0;i<notas.length;i++){
    document.write("La nota es "+notas[i]+"<br>");
}

*/


notas.forEach(function(valor){
    document.write("La nota es "+valor+ " y con el trabajo queda en "+(valor+1)+"<br>");
});
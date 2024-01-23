//funcion que reciba año nacimiento y nos muestre la edad de esa persona

function calculaEdad(anyo){
    var edad= new Date().getFullYear()-anyo;
    return edad;
}

function aprobados(arrayDatos){
    let totalNotas=0;
    for(i=0;i<arrayDatos.length;i++){
        if(arrayDatos[i]>=5){
                totalNotas++;
        }
    }
    return totalNotas;
}


const nombre="Mario";
const anyoNacimiento=1990;
const notasDaw=new Array(4,5,9,0,7);
const notasDam=new Array(2,0,5,3.0);
//document.write("El alumno "+nombre+" tiene "+calculaEdad(anyoNacimiento)+" años");

//document.write("Aprobados DAW "+aprobados(notasDaw)+"<br>");
//document.write("Aprobados DAM "+aprobados(notasDam)+"<br>");

for(i=0;i<5;i++){
    notasDaw[i]=parseFloat(prompt("DAME LA NOTA DEL ALUMNO "+(i+1)));

}

document.write("numero aprogados "+aprobados(notasDaw));
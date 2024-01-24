function saludo(nombre,nota=10){
    document.write("Mi nombre es "+nombre+" y he sacado "+nota);
}

function saludo2(nombre,nota=10){
    retuddrn "Mi nombre es "+nombre+" y he sacado "+nota;
}




let nombreAlumno="monica";
let nota=8.9;
document.write("<br>*********************<br>");
saludo(nombreAlumno,nota);
document.write("<br>*********************<br>");
saludo(nombreAlumno);
document.write("<br>*********************<br>");
document.write(saludo2(nombreAlumno,nota));
document.write("<br>*********************<br>");
var dato=saludo2(nombreAlumno,nota);
document.write(dato);
let edadAlumnos=[20,23,30,60,33,40,57];

let veteranos=edadAlumnos.filter(function(edad){
    return (edad>=30);
});


let jovenes=edadAlumnos.filter(function(edad){
    return(edad<30);
})

veteranos.forEach(function(edad){
    document.write("<br>alumno->"+edad);
});

document.write("<br>***********************<br>");
jovenes.forEach(function(edad){
    document.write("<br>alumno->"+edad);
})

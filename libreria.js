let librosColeccion = [{
    "Nombre" : "Crepúsculo",
    "Cant" : 520,
    "Autor" : "Stephenie Meyer",
    "Generos" : "cine romantico.",
    "Disponible" : "false",
},{
    "Nombre" : "Crepúsculo la saga: amanecer - parte 1",
    "Cant" : 832,
    "Autor" : "Stephenie Meyer",
    "Generos" : "cine romantico.",
    "Disponible" : "false",
}]
function genero(librosColeccion){
    let gr= " ";
    for (let index=0; index<librosColeccion.Generos.length; index++){
        gr = gr + librosColeccion.Generos[index] + " ";
    }
    return gr;
}
function informacionLibro(librosColeccion){
    if (librosColeccion.Disponibilidad == true){
        return ("El libro " + librosColeccion.Nombre + " tiene " + librosColeccion.Cant + " paginas, fue escrito por " +
librosColeccion.Autor + " y es del genero " + genero(librosColeccion) + " y esta disponible")
    }else{
        return ("El libro " + librosColeccion.Nombre + " tiene " + librosColeccion.Cant + " paginas, fue escrito por " +
librosColeccion.Autor + " y es del genero " + genero(librosColeccion) + " y no esta disponible")
    }
}



function imprimirLibros (Nuevolibro){
    let mensaje = Nuevolibro.Nombre;
    return mensaje;
}

    let Nuevolibro= {
    "Nombre" : "El ingenioso caballero Don Quijote de la Mancha",
    "Cant" : "352",
    "Autor" : "Miguel de Cervantes",
    "Generos" : ["Parodia" , "Satira" , "Novela Psicologica"],
    "Disponibilidad" : true, 
    }

   

function agregar(Nuevolibro){
return librosColeccion.push(Nuevolibro);
}

agregar(Nuevolibro);

for(index=0 ; index<librosColeccion.length; index++){
    if(librosColeccion[index].Disponibilidad == true){
    console.log(imprimirLibros(librosColeccion[index])); //Imprimir nombres objetos
}
}

for (let index = 0; index < librosColeccion.length; index++) {
    console.log (informacionLibro(librosColeccion[index]));
    console.log(" ");
}
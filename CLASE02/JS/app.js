let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');

//recorrer objetos
for (let index = 0; index < cantidad; index++) {
    console.log(texto);
};

//¿Qué tiene que hacer este código?
//¿Por qué no cumple con su función?

let lados = prompt('INGRESE CANTIDAD DE LADOS');

for (let index = 0; index < lados; index++) {
    if (index > 3) {
        console.log("no tiene 3 lados");
    };
    alert("lado");
};
//¿Qué tiene que hacer este código?
//¿Por qué no cumple con su función?
//¿Qué propuesta podrías hacer para que tenga sentido su uso?

/*Actividad 01:
Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese
número es par o impar.
*/
const userNumber = prompt('INGRESE UN NÚMERO');

if(userNumber % 2 === 0){
    console.log('el numero es par');
}else{
    console.log('el numero es impar');
};


//le envie 72 horas antes un mensaje con el turno
//que la persona me confirme y si no em confirma que reprograme
const opcionUser = prompt('me confirmas el turno el dia jueves?, ir a wsp O cambiar tema');

if(opcionUser === 'si'){
    console.log('genial!!! te esperamos a vos y a pantu')
}else{
    const preguntaUser = prompt('Queres repogramarlo?');
    if(preguntaUser === 'si'){
        console.log('Perfecto, tengo estos turnos: a)7-04-2025, b)12-04-2025, c)17-04-2025');
    }else{
        console.log('muchas gracias, volve pronto')
    }
};

/*
Actividad 02:
Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar
cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".
*/


//
const usuarioNombre = 'CRIstian';

if(usuarioNombre === 'cristian' || usuarioNombre === 'Cristian' || usuarioNombre === 'CRISTIAN'|| usuarioNombre === 'CRIstian'){
    //entramos aca 
};

//esta es la forma de hacerlo correctamente
const usuario2 = prompt('ingrese su nombre').toLowerCase();

if(usuario2 === 'cristian'){
    console.log('bienvenido');
}else{
    console.log('no te conozco');
};

const edad = '18';

if(edad === 18){
    console.log('sos mayor')
}else{
    console.log('no entras')
}

if(edad == 18){
    console.log('sos mayor')
}else{
    console.log('no entras')
}


const documento = prompt('que documento trajiste');
/*
if(documento === 'DNI' || documento === 'licencia de conducir'){
    console.log('podes entrar');
};

if(documento != 'DNI'){
    console.log('che anda buscar el DNI');
};*/

if(documento === 'DNI'){
    console.log('presenta el DNI'); // 40109439
}else if(documento === 'pasaporte'){
    console.log('pasaporte') // 40.109.439
}else if(documento === 'licencia de conducir'){
    console.log('lic de conducir'); 
}else if(documento === 'partida de nacimiento'){
    console.log('partida de nacimiento')
};

switch (documento) {
    case "DNI":
        alert("presente DNI");
        break;
    case "PASAPORTE":
         alert("pasaporte");
         break;
    case "LIC DE CONDUCIR":
        alert("lic de conducir");
        break;
    default:
        alert("que vas a presentar?")
        break;
}

//for es utilizado para cuando el bucle es determinado 
//y while para cuando el bucle es indeterminado 
//(no se conoce de antemano la cantidad de repeticiones)

for(let index = 0; index < alumnosCoder; index++){
    if(alumnosCoder === 'aprobado'){
        console.log('mostras en la pantalla todos los alumnos coder aprobados');
    };

    if(alumnosCoder === 'desaprobado'){
        console.log('mostras en la pantalla todos los alumnos coder desaprobados');
    };
};

if(numEntrega === 'Entrega N5'){
    console.log('aca mostramos solo a los entregan5')
}
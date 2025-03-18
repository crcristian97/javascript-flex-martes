console.log("Estamos conectados...");

//variables
//valor reservado de la memoria de javascript

//crear una variable, se puede hacer con LET o CONST
//iniciarlizarla solamente y luego declararla

///////MUYY MALA PRÁCTIVA////////////
let dolarBlueCompra;
let dolar_blue_venta;

//como la declaramo mas tarde
dolarBlueCompra = 1220;

///////MUYY MALA PRÁCTIVA////////////

//inicializarla y declararla
let dolarMEPCompra = 1240; //--> Muy buena práctica;
dolarMEPCompra = 1250;// --< 78
dolarMEPCompra = 1250;// --> archivo form.js linea 39;
dolarMEPCompra = 1250;// --> archivo /features/heroSeccion/form.js linea 39;
//esto tampoco es una MUY BUENA PRACTICA

//utilizar const es la mejor forma de declarar variables
//si o si tenes que inicializarla, asignarla y no se puede cambiar el valor a lo largo de mi proyecto
const dolarBolsaCompra = 1240;

//existen 6 tipos de datos
const nombreProfesor = 'cristian'//string
const apellidoProfesor = "Cabrera"; //string
const edadProfesor = 28;//number
const sosProfesor = true;//boolean
const sosTutor = false;//boolean


//null --> cuando la varaible no tiene valor
//undefined --> cuando la variable no esta declarada
const alumnoCoder = {
    nombre: 'ruben',
    apellido: 'cornejo',
    edad: 26
}//object --> cuando la variable es un objeto 

//TYPE OF sirve para saber el tipo de dato
console.log('dame el tipo de dato de la variable nombreProfesor: ', typeof nombreProfesor);
console.log('dame el tipo de dato de la variable edadProfesor: ', typeof edadProfesor);
console.log('dame el tipo de dato de la variable sosProfesor: ', typeof sosProfesor);
console.log('dame el tipo de dato de la variable alumnoCoder:', typeof alumnoCoder);

//CONCATENACION DE VARIABLES
const cantidadBilletes = 10;
const resultado = cantidadBilletes * dolarBolsaCompra;
console.log("El resultado es", resultado);

//QUIERO CONCATENAR 2 STRING, MI APELLIDO Y MI UNIVERSIDAD;
const apellido = 'cabrera';
const universidad = 'siglo xxi';


console.log('Mi apellido es ' + apellido + ' y fui a ' + universidad); //em5
console.log(`Mi apellido es ${apellido} y fui a ${universidad}`); //asi lo hace candela EM6--> USAMOS TEMPLATE STRING

/*
const usuarioApellido = prompt('decime tu apellido');
console.log('el apellido es', usuarioApellido);
const edadUsuario = prompt('tu edad?');
console.log('edad usuario; ', edadUsuario);
console.log('typeof de promp: ', typeof usuarioApellido);
console.log('typeof de promp: ', typeof edadUsuario);
*/

alert('estuviste mucho tiempo inactivo, te cerraremos la sesion');


//ejercicio - hacer escalable la lógica de el precio de dolar mep y dolar blue
//juancito cobra 2.000.000 de pesos argentinos, quiero que hagan la lógica para saber cuantos dolares cobra usando todos los dolares



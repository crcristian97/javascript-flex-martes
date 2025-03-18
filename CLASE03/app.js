import  redirectSocialMedia  from './socialMedia.js'
//funciones
//para crear funciones uso la palabra RESERVADA "FUNCTION"
//para llamarla tengo que husar el nombre de la función seguido de ();

//Sombrearte.com.ar
/*
function redirectInstagram(){
    //aca la lógica del redirect
    window.location.href = 'https://www.instagram.com/sombrearte.com.ar/';
};

function redirectFacebook(){
    //aca la lógica del redirect
    window.location.href = 'https://www.facebook.com/sombrearte.com.ar/';
};

function redirectPinterest(){
    //aca la lógica del redirect
    window.location.href = 'https://www.pinterest.com/sombrearte.com.ar/';
};

redirectFacebook();
redirectPinterest()
redirectInstagram();

//PARÁMETOS
//-Información que le pasamos a la función para darle escalabilidad
function redirectSocialMedia(redes = '', socialMedia = '', paidMedia = ''){
    console.log("Esta es la red", redes)
    //    window.location.href = `https://www.${redes}.com/sombrearte.com.ar/`;
};
redirectSocialMedia('link', 'facebook', 'instagram');
redirectSocialMedia('facebook');
redirectSocialMedia('instagram');
*/

//cuantos parámetros puedo pasarle: n10 , entre 1 y 7
//los párametros se envian en orden y se reciben en orden
// Muestra: Libro "El Principito": Devuelto con 3 días de retraso. Multa: $1.5.


//funcon anónima del socialMedia
const facebook = function (redes = '') {
   return console.log("Esta es la red", redes);
}; //ems6
facebook('instagram');

//funcion fecha
const instagram = (redes = '') => {
    console.log("Esta es la red", redes)
} //es6

redirectSocialMedia('x');
redirectSocialMedia('facebook');
redirectSocialMedia('instagram');
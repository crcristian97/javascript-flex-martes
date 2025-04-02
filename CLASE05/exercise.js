//Imaginemos una función que se ejecuta al momento en el cual un usuario ingresa a una página. 
//La misma debe saludar al usuario por su nombre, o solicitarle el nombre la primera vez que ingresa y conservar el mismo para saludarlo en sus futuras visitas.
//Veamos cómo almacenar y recuperar esta información en LocalStorage, utilizando sus diferentes métodos.

function solicitarDatosUsuario(){
    const nombreUsuario = prompt('username'); //input
    localStorage.setItem('nombreUser', nombreUsuario);
};


function inicioSesion(){
    debugger
    const nombreUsuarioLS = localStorage.getItem('nombreUser');
    if(!nombreUsuarioLS){
        solicitarDatosUsuario();
    }else{
        alert(`Hola ${nombreUsuarioLS}`);
    }
};


inicioSesion();
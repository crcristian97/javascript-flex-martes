//REGISTRARSE
function validarPassword(){
    const usuarioAppNew = prompt('Decime usuario');
    const passwordAppNew = parseInt(prompt('Decime tu password'));
    const validatePasswordAppNew = parseInt(prompt('Repetí tu password'));
    if (passwordAppNew === validatePasswordAppNew) {
        alert(`Bienvenido!! ${usuarioAppNew}`);
        //su usuario va a la base de datos
    }
};

validarPassword();

//LOGIN

function logIng(){
    //RECUPERO EL NOMBRE
    const nombreDatabase = 'cristian';
    const userInput = prompt('Usarios');
    if(userInput === nombreDatabase){
        window.location.href = '/';
    };
};

logIng()
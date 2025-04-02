const mensaje = JSON.parse(localStorage.getItem('lenguaje')) || '' 
if(mensaje){
    alert('Eyy veni a terminar la compra!!!');
}

// tenemos localStorage y sessionStorage
//objetos nativos de JS

//apenas cargo la app me fijo en el localStorage que idioma hay
/*
*/
//envio la info con el setItem
const idiomas = {
    principal: 'es',
    secundario: 'en',
    terciario: 'pt'
};
localStorage.setItem('lenguaje', JSON.stringify(idiomas));

//como obtengo la info
const idioma = localStorage.getItem('lenguaje');

if(idioma === 'es'){
    console.log('tu app se muestra en español');
}else if(idioma === 'en'){
    console.log('tu app se muestra en inglish');
}else if(idioma === 'pt'){
    console.log('tu app se muestra en portuges');
};
console.log(idioma);

//eliminar datos del localStorage 
localStorage.clear() //este me elimina todo el LS
localStorage.removeItem('lenguaje'); //este me elimina solo la clave


const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
    {  id: 2,  producto: "Fideo", precio: 70 },
    {  id: 3,  producto: "Pan"  , precio: 50},
    {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)};
//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}

// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));


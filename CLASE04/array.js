const servicios = [
    "Diseño de sitios web profesionales para tu empresa",
    "Crea tu propia tienda online y vende sin límites", 
    "Landing Pages Personalizadas para Maximizar Conversiones"
];

const alumnosCoder = ["agustin Romero", "Robert Griman", "Ariel Castillo", "Cristian Almoniga", "cc"];

for(let index = 0; index < alumnosCoder.length; index++){
    console.log("Todas la entregas: ",alumnosCoder[index])
};

//metodo push mete un elemento en mi array
//simulacion de "AGREGAR AL CARRITO"
/*
const carritoShop = ['reloj', 'pulsera'];

// cuando el usuario me aprete agregar al carrito hago una lógica
const producto = prompt('Que producto agregaste');

function addCart(product){
    carritoShop.push(product);
};

function showNumberCart(product){
    return product.length;
};

//vaciar TODO EL CARRITO
//vaciar un elemento particular 🗑️
function deleteProduct(index){
    carritoShop.pop(); // el ultimo elemento
    carritoShop.shift(); // te quita el primero
}


addCart(producto);

console.log(carritoShop);

const nombres = ["Luis", "Ana", "Julia"];
console.log(nombres.join('/'));
*/
//19-01-1997;
//19/01/1997;
//01/19/1997;


const ciudadArgentina = ['cordoba', 'santiago del estero', 'bs as', 'tucuman', 'san luis']; //esto me viene de la api
const ciudadUsuario = []; //array
const ciudadInput = 'cordoba';

if(ciudadUsuario.includes(ciudadInput)){
    console.log('esta ciudad ya esta cargada');
}else{
    ciudadUsuario.push(ciudadInput);
}

const dataBaseUser = [];

class UsuarioTienda{
    constructor(img = [], nombre = '', edad = 18, ciudad = '', preferencias = [], descripcion = '', altura = 0){
        this.img = img,
        this.nombre = nombre,
        this.edad = edad,
        this.ciudad = ciudad,
        this.preferencias = preferencias,
        this.descripcion = descripcion,
        this.altura = altura,
        dataBaseUser.push(this);
    }
};

const userLeandro = new UsuarioTienda(['imagen1', 'imagen2'], 'leandro', 30, 'Buenos aires', ['lo que venga'], 'Me encanta escuchar a la gente, me gustan los perros, vino y charla simpre en el medio', 1.79);

const userAgustin = new UsuarioTienda(['imagen1', 'imagen2'], 'leandro', 30, 'Buenos aires', ['lo que venga'], 'Me encanta escuchar a la gente, me gustan los perros, vino y charla simpre en el medio', 1.79);

const userCristian = new UsuarioTienda(['imagen1', 'imagen2'], 'leandro', 30, 'Buenos aires', ['lo que venga'], 'Me encanta escuchar a la gente, me gustan los perros, vino y charla simpre en el medio', 1.79);

const userGenesis = new UsuarioTienda(['imagen1', 'imagen2'], 'leandro', 30, 'Buenos aires', ['lo que venga'], 'Me encanta escuchar a la gente, me gustan los perros, vino y charla simpre en el medio', 1.79);

const userMilagros = new UsuarioTienda(['imagen1', 'imagen2'], 'leandro', 30, 'Buenos aires', ['lo que venga'], 'Me encanta escuchar a la gente, me gustan los perros, vino y charla simpre en el medio', 1.79);

const userValeria = new UsuarioTienda(['imagen1', 'imagen2'], 'leandro', 30, 'Buenos aires', ['lo que venga'], 'Me encanta escuchar a la gente, me gustan los perros, vino y charla simpre en el medio', 1.79);

const userccca = new UsuarioTienda(['imagen1', 'imagen2'], 'leandro', 30, 'Buenos aires', ['lo que venga'], 'Me encanta escuchar a la gente, me gustan los perros, vino y charla simpre en el medio', 1.79);

const userVaaaaa = new UsuarioTienda(['imagen1', 'imagen2'], 'leandro', 30, 'Buenos aires', ['lo que venga'], 'Me encanta escuchar a la gente, me gustan los perros, vino y charla simpre en el medio', 1.79);
console.log(dataBaseUser);





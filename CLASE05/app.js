// como son los objectos 
const alumnoCoder = {} // objeto
const coches = [] //arrays

const cristianCoder = {
    nombre: 'cristian',
    edad: 45,
    altura: 175,
    mascotas: false,
    pareja: false,
    hobbies: ['golf', 'fumar un habano']
};

console.log(cristianCoder)

class UsuarioTinder{
    constructor(nombre = '', edad = '', ciudad = '', imagenes = [], preferencia = '', edadPreferencia = [], hobbies = [], descripcion = ''){
       this.nombre = nombre,
       this.edad = Number(edad),
       this.ciudad = ciudad,
       this.imagenes = imagenes,
       this.preferencia = preferencia,
       this.edadPreferencia = edadPreferencia,
       this.hobbies = hobbies,
       this.descripcion = descripcion
    };
}

const usuario1 = new UsuarioTinder('Valentina', 30, 'Lanus - Bs As', ['img1', 'img2', 'img3'], 'M', [28, 35], ['boxeo', 'armar rompecabezas'], 'me gusta tomar mates y las charlas profundas'); 
const usuario2 = new UsuarioTinder('Franco', 25, 'Moreno - Bs As', [], 'F', [18, 45], ['boxeo', 'armar rompecabezas'], ); 

const usuariosTinder = [];
usuariosTinder.push(usuario1);
usuariosTinder.push(usuario2);

localStorage.setItem('usuariosTinder',JSON.stringify(usuariosTinder));
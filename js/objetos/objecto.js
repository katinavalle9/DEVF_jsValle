/* Objetos literales - para acceder a una propiedad con un (.) o se puede acceder con corchetes []
 Crear pirpiedad- con un operador punto y lo que quieres agregar
*/

let katia ={
    nombre: "Katia",
    apellido: "valle",
    edad: 2023- 1999,
    hasIne: true,
    metodo: function tomarAgua(){
        console.log(`${ana.nombre} esta tomando agua`)
    },
    amigos: [
        amigo= {
            mejorAmigo: false,
            nombre: "Frank"
        },
        amigo= {
            mejorAmigo: true,
            nombre: "Catalina"
        },
        amigo= {
            mejorAmigo: false,
            nombre: "Kike"
        },
        amigo= {
            mejorAmigo: false,
            nombre: "Caro"
        }
    ]
}

let ana={
    nombre:"ana"
}

console.log( `${katia.nombre} tiene ${katia.amigos.length} y su mejor amigo es: ${katia.amigos.filter(el => el.mejorAmigo===true)[0].nombre}`)

// console.log(katia.nombre);
// //para añadir
// katia.perro = "Nena"
// console.log(katia);

let lista =[
    {
        nombre : "Alex Turner",
        banda: "Artics Monkey",
        albums:["AM", "The Car"],
        nacionalidad: "Britanico",
        edad: 36,
        cancion: "I wanna be yours"
    },
    {
        nombre: "Julian Casablancas",
        banda: "The Strokers",
        albums: ["room on fire", "The new abnormal"],
        nacionalidad: "estadounidense",
        edad: 45,
    }
]

//para añadir
lista[1].cancion=["A"]

//estamos entrando al objeto lista y se pone que objeto quieres acceder [1] y accedo al nombre de ese arreglo
console.log(lista[1].albums[1]);
console.log(`El artista: ${lista[0].nombre} tiene ${lista[0].edad} y toca para la banda ${lista[0].banda}`)
console.log(`Me gusta mucho la banda de ${lista[0].banda} porque tiene la cancion de: ${lista[0].cancion} ✨`)

/*funciones 
parametros - lo que esta adentro del parentesis 
funcion vacia - void es cuando no retorna nada
funcion rtorna - retorna un valor 

*/

function suma(a,b){
    return a + b;
}
console.log(suma(5,4))


function salud(){
    console.log("Hola");
}
salud();

function parEImpar(numero){
    if(numero%2===0){
        return true;
    }else{
        return false;
    }
}

console.log(parEImpar(2));

//Metodos de un objeto- Una funcion esta dentro de una clase o un objeto
//se puede meter un metodo que tenga una funcion en una array

katia.metodo();
// for(let i=10; i>=10; i--) {
//     console.log(i);
// }

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


const frutas =["manzanas","pera","naranja","uvas"]

// for(let i=0; i<frutas.length; i++) {
//     console.log(frutas[i]);
// }

//Recorrer un arreglo
for(let i=0; i<lista[0].albums.length; i++) {
    console.log(lista[0].albums[i]);
}

//para recorrer arreglos con forEach
frutas.forEach(fruta => console.log(fruta));

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

//para recibir valores de cada uno de mi objeto
const valores = Object.keys(katia);
for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]);
}
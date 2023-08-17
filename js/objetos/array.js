/*metodos array
leng- nos devuelve el numero total de elementos
indexOf - ingresa el indice de cada elemento que estamos buscando sino lo encuentras retorna -1 
includes - Solo nos regresa un booleano es para saber si existe o no en el arreglo
push- Agrega un elemento o un item al FINAL de la lista
unshirf - Agregar un elemento o un item al PRINCIPIO de la lista
pop - Elimina el item que esta en al final de la lista no se le pasa ningun argumento solo es poner el metodo
shift - Elimina el que esta al principio de la lista no se le pasa ningun argumento solo es poner el metodo
split - Divide una cadena string tomando referencia donde encuentre el caracter indicado 
slice - Quita una parte de la cadena y devuelve una nueva cadena (1,2) pero tambien se le puede poner solo uno (2)
splice - Agrega o borrar algun elemento del arreglo (1,0, "may") el primero es la posicion donde quiero poner ese string y el segundo cuantos quieres eliminar apartir de ese indice y el ultimo es el valor a insertar
reverse -coloca los elementors alrevez y altera el arreglo original
contact - uno dos arreglos existentes,y devuelve un nuevo arreglo 
sort - Ordena de manera ascendente convirtiendo los elementos a string y comparando los valor UTF-16 de las secuencias no modifica el arreglo es decir crea una variable para que se cree ese nuevo arreglo
*/

let verduras =["Jitomate","Cebolla", "Zanahoria","Limon"];

let includesCebolla = verduras.includes("manzana");
console.log(includesCebolla);

console.log(verduras.length);

let lowerVerduras = verduras[3].toLowerCase();
console.log(lowerVerduras);

let indexOfVerduras = verduras.indexOf("Limon")
console.log(indexOfVerduras);

let personajes = ["Goku", "Krilin", "Vegeta"];
personajes.push("Gohan");
personajes.unshift("Mago");
personajes.pop()
personajes.shift();
let newPersonas =personajes.slice(1,2)
console.log(newPersonas)
console.log(personajes);

let frutas ="fresa,manzana,pera";
let arregloFrutas = frutas.split(",");
console.log(arregloFrutas);

let verduras1 = ["pera","manzana", "platano","uvas","mandarina"];
verduras.splice(2,0,"limon", "sandia");
console.log(verduras1);

let letras1 =["a","b","c","d"];
letras1.reverse();
console.log(letras1);

let numeros =[1,2,3,4];
let numeros2= [5,6,7,8];
let letras2 =["a","b","c"];
let numerosCompletos = numeros.concat(numeros2,letras2);
console.log(numerosCompletos);

let letters =["p","a","z"];
let letrasOrdenas = letters.sort();
console.log(letrasOrdenas);

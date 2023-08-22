//para crear elementos
const header = document.createElement("h1");
//se le pone el contenido
header.textContent="Este es un h1"
//agregarselo al html
// const body = document.querySelector("body");
//con el tagnema se le pone al body una posicion porque tiene devuelve un arreglo 
// const body= document.getElementsByTagName("body");
// //seria el hijo del body
// body[0].appendChild(header);

//esto se puede hacer con un id
const body= document.getElementById("body");
body.appendChild(header);

//se pueden cambiar los estilos con esto: con la etiqueta body
header.style.backgroundColor= "steelblue";
header.style.fontSize="5rem";

//me va a ir a buscar todas las etiquetas que esta en el dom
const parrafos =document.getElementsByTagName("p")
// console.log(parrafos);
//para recorrer mis elementos y ponerle el color a cada uno de mis p
for(let i=0; i<parrafos.length; i++){
    parrafos[i].style.color="blue";
}

//Eliminar elementos de nuestra vista 
// parrafos[0].style.opacity=0;
// parrafos[0].style.display="none";
//si es nuestro primer elemneto
// body.removeChild(parrafos[0]);

const ankers =document.getElementsByClassName("fondo");
//se le pone para el que le queremos quitar la clase al elemento con la posicion 2
ankers[2].classList.remove("fondo");

////////////////////////////EVENTOS/////////////////////////////////
const button= document.querySelector("button")
function sayHello() {
    alert("Hello")
}
//se le pone el evento al boton 
button.addEventListener("click", function sayHello(){
    alert("Hola");
})



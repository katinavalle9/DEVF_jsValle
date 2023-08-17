let age =20;
if(age >=18) console.log("Eres mayor de edad");

if(age >=18){
    console.log(`Tienes ${age} años`)
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

console.log("Fin")

//SEMAFORO
let light="verde";

//la buena practica es poner 3 igual
if(light === "rojo"){
    console.log("No avances")
}else if(light==="amrillo"){
    console.log("baja la velocidad")
}else if(light==="verde"){
    console.log("Avanza")
}else{
    console.log("Ese o es un color válido")
}

//Ejercicio
let ingresar= parseInt(prompt("Ingrese un numero"));

if (ingresar % 2 === 0){
    console.log("el numero es par")
}else{
    console.log("el numero es impar")
}

//divisible entre 3

const numberInput=parseInt(prompt("Dame un numero"))

if(numberInput %3 === 0){
    console.log(`El ${numberInput} es divisible entre 3 y el resultado es ${numberInput / 3}`)
}else{
    console.log(`El ${numberInput} no es divisible entre 3`)
}


let salario =parseInt(prompt("¿Cual es el salario del cliente?"));
let tarjeta = null;

const stickes =parseInt(prompt("¿El usuario tiene una penalizacion?"));
salario = salario - (stickes * 5000);
console.log(salario)

if(salario >0 && salario <= 5000 ){
    tarjeta="Silver"
}else if(salario > 5000 && salario <=1000){
    tarjeta="Gold"
}else if( salario > 10000){
    tarjeta="Platinium"
}

console.log(`Tu tarjeta es: ${tarjeta}`)

if (tarjeta !== null){
    console.log(`Tu tarjeta es: ${tarjeta}`)
}else{
    console.log("Este usuario no puede tener una tarjeta")
}

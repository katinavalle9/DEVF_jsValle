let salario =parseInt(prompt("¿Cual es el salario del cliente?"));
let tarjeta = null;

const stickes =parseInt(prompt("¿El usuario tiene una penalizacion?"));
salario = salario - (stickes * 5000);
console.log(salario)

//esto es para poner una alerta cuando no me ingrese nada
//si el salario viene vacio = "" es igual a un falsy 
//!salario ->""

if(!salario){
    alert("Ingresa un valor!")
}
// else{
//     alert("Salario valido!")
// }


// if(false){
//     //si condicion es verdadera
// }else{
//     //si es falsa
// }


if(salario >0 && salario <= 5000 ){
    tarjeta="Silver"
}else if(salario > 5000 && salario <=1000){
    tarjeta="Gold"
}else if( salario > 10000){
    tarjeta="Platinium"
}

console.log(`Tu tarjeta es: ${tarjeta}`)

//aqui se valida porque sino se escribe nada tambien te dara que no puedes tener una tarjeta
if (!tarjeta){
    console.log(!tarjeta)
    console.log("Este usuario no puede tener una tarjeta")
}else{
    console.log(`Tu tarjeta es: ${tarjeta}`) 
}

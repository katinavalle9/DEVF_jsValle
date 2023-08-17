//Evaluar la condicion 
// let dato =prompt("Dame un dato");
// while(dato !="esc"){
//     console.log(dato);
//     dato= prompt("Dame un dato");
// }

// let i = 1;
// while(i<=12){
//     console.log(i);
//     i++;
// }

// let i = 1;
// while(i <= 12){
//     console.log(`${i}+12 = ${i+12}`);
//     i++;
// }

// let j = 1;
// while(j <= 12){
//     console.log(`${j}*12 = ${j*12}`);
//     j++;
// }

//Do WHILE - Al inicio ejecuta el codigo y despues la ejecuta
// let numero;
// do{
//  numero =prompt("Dame un numero del 1 al 10")
//  console.log(numero);
// }
// while(numero > 10 || numero < 1)
// console.log(`Super! El ${numero} que me diste si esta entre el 1 y 10 `)

const array = [0,1,2,3,4,5,6]

for (let i = 0; i < array.length; i++){
    if(i===3){
        break;
    }
    console.log(i);
}
console.log("Hola");

// const number1= 2;
// const numbre2=10;

//clg = console.log

//concatenacion

// console.log(sum);
// console.log(multiplication);

const number1String=prompt("dame un numero:");
const number2String=prompt("dame otro numero:");

console.log(typeof number1String);
console.log(typeof number2String);

const number1= Number(number1String);
const number2= Number(number2String);

console.log(typeof number1);
console.log(typeof number2);

const sum=  number1+number2;
const multiplication= number1*number2;
const resta =number1-number2;

console.log(`La suma de ${number1} con ${number2} es igual a ${sum}`);
console.log(`La resta de ${number1} con ${number2} es igual a ${resta}`);
console.log(`La multiplicacion de ${number1} con ${number2} es igual a ${multiplication}`);


let firstName1="Katia" //Declaracion de variable y asiganando valor a la variable 

//const se tiene que inicializar desde el principio y no se puede reasiganar el valor 

const firstName= prompt("Dime tu nombre");
const birthYear= prompt("¿En que año naciste?");

alert("Hola " + firstName + " !");

const age= 2023 - Number(birthYear);
alert("Tienes " + age + " años");
//cuanto falta para retirarnos la edad es de 65 años

// const yearsForRetirement= 65 - 29;
// console.log(yearsForRetirement);

// const retirementAge = 65;
// function calcYearsRetirement(age) {
//   return retirementAge - age;
// }

// const retKat= calcYearsRetirement(29);
// console.log(retKat);

// const user={
//     name: "Katia",
//     age:"23",
//     hasAfore: true
// }

// console.log(user);

// //para agregar una propiedad al array 
// user.yearsForRetirement = calcYearsRetirement(user.age);
// console.log(user);


const retirementAge = 65;
const currentYear= 2023

function calcAge(birthYear){
    return currentYear - birthYear;
}

function calcYearsRetirement(birthYear) {
    const age = calcAge(birthYear);
  return retirementAge - age;
}

const retKat= calcYearsRetirement(29);
console.log(retKat);

const user={
    name: "Katia",
    birthYear:1999,
    hasAfore: true
}

console.log(user);

//para agregar una propiedad al array 
user.yearsForRetirement = calcYearsRetirement(user.age);
console.log(user);

user.yearsForRetirement = calcYearsRetirement(user.birthYear);
console.log(user);

//ejercicio

function saludar(name){
 console.log(`Hola ${name}`)
}

saludar("Yaxche");

//Actividad pendiente

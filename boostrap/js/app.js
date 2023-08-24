const secretNumberContainer = document.getElementById("secret-number");
const input = document.getElementById("floatingInput");
const button = document.getElementById("check-button");
const hint = document.getElementById("hint");
const scoreContainer = document.getElementById("score");
const secretNumberSpan = document.getElementById("number");

//generar  nuestro numero secreto
const randomNumber = Math.round(Math.random() * 20);
//se muestra en el dom con el textContent
secretNumberContainer.textContent = randomNumber;

let score = 20;
//eso sehacer para que sea el score que nosotros queramos
scoreContainer.textContent = score;

// let clicks = 0;

// const compareToRandom = function () {
//   //   clicks++;
//   //   console.log(clicks);
//   const respuesta = Number(input.value);
//   secretNumberText.textContent = secretNumber; // Muestra el número secreto
//   secretNumberText.style.display = "inline"; // Muestra el elemento del número secreto
//   if (respuesta === randomNumber) {
//     hint.textContent = "Correcto✨";
//     hint.classList = "alert alert-success";
//   } else if (respuesta > randomNumber) {
//     hint.textContent = "Intenta un número más pequeño";
//     hint.classList = "alert alert-danger";
//     score--;
//     // score= score-1;
//     // score-=1
//     score.textContent = score;
//     scoreContainer.textContent = score < 0 ? 0 : score;
//   } else {
//     hint.textContent = "Intenta un número más grande";
//     hint.classList = "alert alert-danger";
//     score--;
//     score.textContent = score;
//   }
// };

// button.addEventListener("click", compareToRandom);

button.addEventListener("click", function () {
  const respuesta = Number(input.value);
  secretNumberSpan.textContent = randomNumber; // Muestra el número secreto
  secretNumberContainer.style.display = "block"; // Muestra el elemento del número secreto

  if (respuesta === randomNumber) {
    hint.textContent = "Correcto✨";
    hint.classList = "alert alert-success";
  } else if (respuesta > randomNumber) {
    hint.textContent = "Intenta un número más pequeño";
    hint.classList = "alert alert-danger";
  } else {
    hint.textContent = "Intenta un número más grande";
    hint.classList = "alert alert-danger";
  }
});

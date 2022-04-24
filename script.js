const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");
const dice = document.querySelector(".dice");

let currentScore = 0;
let activePlayer = 0;
let totalScore = [0, 0];
let gameOver = false;

dice.style.display = "none";

rollBtn.addEventListener("click", () => {
  if (!gameOver) {
    const randomImg = Math.floor(Math.random() * 6) + 1;
    dice.src = `./dice-${randomImg}.png`;
    dice.style.display = "block";

    if (randomImg != 1) {
      currentScore += randomImg;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener("click", () => {
  if (!gameOver) {
    totalScore[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= 100) {
      gameOver = true;
      document.querySelector(".player--0").classList.remove("player--active");
      document.querySelector(".player--1").classList.remove("player--active");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    } else {
      switchPlayer();
    }
  }
});

function switchPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
}

newBtn.addEventListener("click", () => {
  dice.style.display = "none";
  gameOver = false;
  currentScore = 0;
  activePlayer = 0;
  totalScore = [0, 0];
  document.querySelector(`#current--0`).textContent = currentScore;
  document.querySelector(`#current--1`).textContent = currentScore;
  document.querySelector(`#score--0`).textContent = totalScore[activePlayer];
  document.querySelector(`#score--1`).textContent = totalScore[activePlayer];
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
});

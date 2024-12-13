//object for words
const wordsData = {
  word1: { scrambled: "elppa", word: "apple" },
  word2: { scrambled: "senot", word: "stone" },
  word3: { scrambled: "segus", word: "guess" },
  word4: { scrambled: "seru", word: "user" },
  word5: { scrambled: "rtfae", word: "after" },
  word6: { scrambled: "loane", word: "alone" },
  word7: { scrambled: "kearb", word: "break" },
  word8: { scrambled: "rtsae", word: "stare" },
  word9: { scrambled: "dcode", word: "coded" },
  word10: { scrambled: "are od", word: "adore" },
  word11: { scrambled: "rbhgit", word: "bright" },
  word12: { scrambled: "iojnt", word: "joint" },
  word13: { scrambled: "leastpn", word: "planets" },
  word14: { scrambled: "knraf", word: "frank" },
  word15: { scrambled: "maerc", word: "cream" },
  word16: { scrambled: "plaer", word: "pearl" },
  word17: { scrambled: "tsrop", word: "sport" },
  word18: { scrambled: "elbam", word: "blame" },
  word19: { scrambled: "eyonm", word: "money" },
  word20: { scrambled: "siveom", word: "movies" },
};

//get the elements
let scrambledWord = document.querySelector(".scrambledWord");
let guessedWord = document.querySelector("#guess");
let playerName = document.querySelector(".name");
let playerScore = document.querySelector(".score");
let playerAttempts = document.querySelector(".attempts");
let startBtn = document.querySelector("#start");

//required variables
let player_name = "player";
let score = 0;
let attempts = 3;

let scarmbled_word;
let userGuess;
let currentAttempt = 1;

let word_display = getRandomWord(wordsData);

//validate input to see if the min length requirement is met
guessedWord.addEventListener("input", () => {
  if (guessedWord.value.length > 0 && guessedWord.value.length < 4) {
    guessedWord.classList.add("error");
  } else {
    guessedWord.classList.remove("error");
  }
});

//create a function that will get the random word from the object

function getRandomWord(words) {
  const keys = Object.keys(words);

  const randomIndex = Math.floor(Math.random() * keys.length);

  const randomKeys = keys[randomIndex];

  return words[randomKeys];
}

function startGame() {
  player_name = window.prompt("Enter your name");
  playerName.textContent = `Player Name: ${player_name}`;
  startBtn.style.display = "none";
  playerScore.textContent = `Score: ${score}`;
  playerAttempts.textContent = `Attempts: ${attempts}`;
  //  word_display = getRandomWord(wordsData);
  scrambledWord.textContent = word_display.scrambled;
}

function submitWord() {
  if (attempts > 0) {
    if (guessedWord.value.toLowerCase() === word_display.word.toLowerCase()) {
      if (currentAttempt === 1) {
        score += 15;
      } else if (currentAttempt === 2) {
        score += 10;
      } else if (currentAttempt === 3) {
        score += 5;
      }

      playerScore.textContent = `score: ${score}`;
      currentAttempt = 1;
    } else {
      alert("Incorrect try again.");
      guessedWord.value = "";
      attempts--;
      currentAttempt++;
      playerAttempts.textContent = `Attempts: ${attempts}`;

      if (attempts === 0) {
        alert(
          "You have run out of attempts, please click the new word to try again"
        );
      }
    }
  }
}

function anotherWord() {
  attempts = 3;
  currentAttempt = 1;
  word_display = getRandomWord(wordsData);
  playerAttempts.textContent = `Attempts: ${3}`;
  //   console.log(word_display.scrambled);
  //   console.log(word_display.word);
  scrambledWord.textContent = word_display.scrambled;
}

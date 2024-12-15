//object for words
const wordsData = {
  word1: {
    scrambled: "elppa",
    word: "apple",
    hint: "A popular fruit that keeps the doctor away",
  },
  word2: {
    scrambled: "senot",
    word: "stone",
    hint: "A hard, solid, nonmetallic mineral matter",
  },
  word3: {
    scrambled: "segus",
    word: "guess",
    hint: "To make an estimate without sufficient evidence",
  },
  word4: {
    scrambled: "seru",
    word: "user",
    hint: "Someone who utilizes a service or product",
  },
  word5: { scrambled: "rtfae", word: "after", hint: "Opposite of before" },
  word6: {
    scrambled: "loane",
    word: "alone",
    hint: "Without anyone else present",
  },
  word7: {
    scrambled: "kearb",
    word: "break",
    hint: "To separate into pieces or cause to stop functioning",
  },
  word8: {
    scrambled: "rtsae",
    word: "stare",
    hint: "To look fixedly at something for a long time",
  },
  word9: {
    scrambled: "dcode",
    word: "coded",
    hint: "Something encoded or in secret form",
  },
  word10: {
    scrambled: "areod",
    word: "adore",
    hint: "To regard with deep affection or love",
  },
  word11: {
    scrambled: "rbhgit",
    word: "bright",
    hint: "Emitting or reflecting a lot of light",
  },
  word12: {
    scrambled: "iojnt",
    word: "joint",
    hint: "Where two parts or objects are connected",
  },
  word13: {
    scrambled: "leastpn",
    word: "planets",
    hint: "Celestial bodies that orbit stars",
  },
  word14: {
    scrambled: "knraf",
    word: "frank",
    hint: "Open, direct, and sincere in speech or expression",
  },
  word15: {
    scrambled: "maerc",
    word: "cream",
    hint: "A rich dairy product used in desserts",
  },
  word16: {
    scrambled: "plaer",
    word: "pearl",
    hint: "A precious, smooth gem found inside oysters",
  },
  word17: {
    scrambled: "tsrop",
    word: "sport",
    hint: "A physical activity involving competition",
  },
  word18: {
    scrambled: "elbam",
    word: "blame",
    hint: "To assign responsibility for a fault or wrong",
  },
  word19: {
    scrambled: "eyonm",
    word: "money",
    hint: "A medium of exchange in transactions",
  },
  word20: {
    scrambled: "siveom",
    word: "movies",
    hint: "Films shown in theaters or on screens",
  },
  word21: {
    scrambled: "nagroe",
    word: "orange",
    hint: "A citrus fruit with a tangy taste",
  },
  word22: {
    scrambled: "sokbo",
    word: "books",
    hint: "Collections of written words or pictures",
  },
  word23: {
    scrambled: "erhcom",
    word: "chrome",
    hint: "A shiny metal often used in plating",
  },
  word24: {
    scrambled: "perapa",
    word: "appear",
    hint: "To become visible or noticeable",
  },
  word25: {
    scrambled: "ngilesep",
    word: "sleeping",
    hint: "The state of resting or being asleep",
  },
  word26: {
    scrambled: "krcatkcab",
    word: "backtrack",
    hint: "To retrace your steps or actions",
  },
  word27: {
    scrambled: "grsfine",
    word: "fingers",
    hint: "Digits of the hand used for grasping",
  },
  word28: {
    scrambled: "croergnid",
    word: "recording",
    hint: "The act of capturing sound or video",
  },
  word29: {
    scrambled: "ntouivloe",
    word: "evolution",
    hint: "The gradual development of something",
  },
  word30: {
    scrambled: "rstwrie",
    word: "writers",
    hint: "People who create written works",
  },
  word31: {
    scrambled: "reviled",
    word: "deliver",
    hint: "To bring something to a person or place",
  },
  word32: {
    scrambled: "gmoniv",
    word: "moving",
    hint: "Changing position or location",
  },
  word33: {
    scrambled: "esreuc",
    word: "secure",
    hint: "To make safe or protect from danger",
  },
  word34: {
    scrambled: "emplis",
    word: "simple",
    hint: "Not complicated or difficult to understand",
  },
  word35: {
    scrambled: "loohcs",
    word: "school",
    hint: "A place for learning and education",
  },
  word36: {
    scrambled: "poeple",
    word: "people",
    hint: "Humans in general or a group of individuals",
  },
  word37: {
    scrambled: "allpep",
    word: "apple",
    hint: "Bill Gates",
  },
  word38: {
    scrambled: "gniod",
    word: "doing",
    hint: "Performing an action or task",
  },
  word39: {
    scrambled: "denip",
    word: "pined",
    hint: "To feel deep sorrow or regret",
  },
  word40: {
    scrambled: "slpae",
    word: "leaps",
    hint: "To jump over something",
  },
  word41: {
    scrambled: "sernotica",
    word: "reactions",
    hint: "Responses to certain stimuli or events",
  },
  word42: {
    scrambled: "redinrem",
    word: "reminder",
    hint: "A thing that helps you remember something",
  },
  word43: {
    scrambled: "sftihs",
    word: "shifts",
    hint: "Changes in position or direction",
  },
  word44: {
    scrambled: "lrteia",
    word: "retail",
    hint: "The sale of goods in small quantities",
  },
  word45: {
    scrambled: "gnitnirp",
    word: "printing",
    hint: "The process of producing text or images on paper",
  },
  word46: {
    scrambled: "pecernestis",
    word: "persistence",
    hint: "The ability to keep going despite difficulties",
  },
  word47: {
    scrambled: "taincer",
    word: "certain",
    hint: "Without doubt, sure to happen",
  },
  word48: {
    scrambled: "witnol",
    word: "wilton",
    hint: "A famous type of woven fabric",
  },
  word49: {
    scrambled: "sdite",
    word: "stied",
    hint: "A type of knot used for binding",
  },
  word50: {
    scrambled: "gniniktt",
    word: "knitting",
    hint: "The process of making fabric using yarn",
  },
};

//get the elements
let scrambledWord = document.querySelector(".scrambledWord");
let guessedWord = document.getElementById("guess");
let playerName = document.querySelector(".name");
let playerScore = document.querySelector(".score");
let playerAttempts = document.querySelector(".attempts");
let startBtn = document.querySelector("#start");
let instruction = document.querySelector(".instruction");
let scrambledWord_display = document.querySelector(".scarmbledWordDisplay");
let btns = document.querySelector(".btns");
let feedback = document.querySelector(".feedback");
// let guessContainer = document.querySelector(".guessContainer");

let guessContainer = document.querySelector(".guessContainer");

//Create an element to display hint for the user
let result = document.createElement("div");
result.classList.add("result");

//required variables
let player_name = "player";
let score = 0;
let attempts = 3;

let scarmbled_word;
let userGuess;
let currentAttempt = 1;

let word_display = getRandomWord(wordsData);

//create event listener to the input box so it is default on focus
guessedWord.addEventListener("focus", function () {
  guessedWord.style.backgroundColor = "white";
});

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

  //Load the correct divs after the start game is clicked
  instruction.style.display = "none";
  scrambledWord_display.style.display = "block";
  btns.style.display = "block";
  feedback.style.display = "flex";
  guessContainer.style.display = "inline-block";
}

function submitWord() {
  if (attempts > 0) {
    if (guessedWord.value.toLowerCase() === word_display.word.toLowerCase()) {
      if (currentAttempt === 1) {
        result.textContent = `Correct! You earned 15pts.`;
        guessedWord.style.backgroundColor = "green";
        result.style.backgroundColor = "limegreen";
        guessContainer.append(result);
        score += 15;
      } else if (currentAttempt === 2) {
        result.textContent = `Correct! You earned 10pts.`;
        result.style.backgroundColor = "limegreen";
        guessedWord.style.backgroundColor = "green";
        guessContainer.append(result);
        score += 10;
      } else if (currentAttempt === 3) {
        result.textContent = `Correct! You earned 5pts.`;
        guessedWord.style.backgroundColor = "green";
        result.style.backgroundColor = "limegreen";
        guessContainer.append(result);
        score += 5;
      }

      playerScore.textContent = `score: ${score}`;
      currentAttempt = 1;
    } else {
      //   alert("Incorrect try again.");
      result.textContent = `Inorrect! Try again`;
      result.style.backgroundColor = "red";
      guessContainer.append(result);
      guessedWord.style.backgroundColor = "red";

      guessedWord.value = "";
      attempts--;
      currentAttempt++;
      playerAttempts.textContent = `Attempts: ${attempts}`;

      //show the hint for the user if the user has 1 attempts left
      if (attempts === 1) {
        result.textContent = ` Hint: ${word_display.hint}`;
        result.style.backgroundColor = "wheat";
        guessContainer.append(result);
      }

      if (attempts === 0) {
        result.textContent = `Out of Attempts. Correct answer: ${word_display.word}`;

        result.style.backgroundColor = "red";
        guessContainer.append(result);
      }
    }
  }
}

function anotherWord() {
  attempts = 3;
  currentAttempt = 1;
  word_display = getRandomWord(wordsData);
  playerAttempts.textContent = `Attempts: ${attempts}`;
  //   console.log(word_display.scrambled);
  //   console.log(word_display.word);
  scrambledWord.textContent = word_display.scrambled;
  result.textContent = "";
  guessContainer.append(result);

  guessedWord.value = "";
  guessedWord.style.backgroundColor = "white";
}

function whenLoaded() {
  instruction.style.display = "block";
  scrambledWord_display.style.display = "none";
  btns.style.display = "none";
  feedback.style.display = "none";
  guessContainer.style.display = "none";
}

function reset() {
  let reset_conf = confirm("Are you sure you would like to reset?");
  if (reset_conf === true) {
    alert(`Thank you for playig. Your score was: ${score}`);
    whenLoaded();
    startBtn.style.display = "inline-block";
    score = 0;
    attempts = 3;
    currentAttempt = 1;
  }
}

window.onload = whenLoaded();

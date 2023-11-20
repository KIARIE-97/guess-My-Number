"use strict";
/*
document.querySelector(".message").textContent = "correct number";

console.log(document.querySelector(".message").textContent);
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 22;
*/

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    document.querySelector(".message").textContent = "no number";

    //when wins
  } else if (guess == number) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = number;

    //inclusion of css in js
    document.querySelector("body").style.backgroundColor = " #60b347";

    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    /*when guess is wrong
    else if (guess !== number) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          guess > number ? "Too high!" : "Too Low!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "you lost the game";
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});
*/
    //when too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
    //when too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = " #222";

  document.querySelector(".number").style.width = "15rem";
});

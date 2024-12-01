const choices = document.querySelectorAll(".choice");
const display = document.getElementById("display");
const againbtn = document.getElementById("again");
const plyArea = document.querySelector(".ply-area");
const selctedArea = document.querySelector(".selcted-area");
const score = document.getElementById("score");
const paper1 = document.getElementById("paper1");
const paper2 = document.getElementById("paper2");
const rock1 = document.getElementById("rock1");
const rock2 = document.getElementById("rock2");
const scissor1 = document.getElementById("scissor1");
const scissor2 = document.getElementById("scissor2");

function randomChoice() {
  const option = ["paper", "scissor", "rock"];
  const num = Math.floor(Math.random() * 3);
  return option[num];
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const user = choice.getAttribute("id");
    const computer = randomChoice();
    plyArea.style.display = "none";
    selctedArea.style.display = "flex";
    //  your pick
    if (user == "paper") {
      paper1.style.display = "flex";
      scissor1.style.display = "none";
      rock1.style.display = "none";
    } else if (user == "scissor") {
      scissor1.style.display = "flex";
      paper1.style.display = "none";
      rock1.style.display = "none";
    } else if (user == "rock") {
      rock1.style.display = "flex";
      scissor1.style.display = "none";
      paper1.style.display = "none";
    }

    //  com pick
    if (computer == "paper") {
      paper2.style.display = "flex";
      scissor2.style.display = "none";
      rock2.style.display = "none";
    } else if (computer == "scissor") {
      scissor2.style.display = "flex";
      paper2.style.display = "none";
      rock2.style.display = "none";
    } else if (computer == "rock") {
      rock2.style.display = "flex";
      scissor2.style.display = "none";
      paper2.style.display = "none";
    }

    //  you and com comapre

    if (user == computer) {
      display.textContent = "DRAW";
      againbtn.style.color = "black";
      paper1.classList.remove("spot");
      paper2.classList.remove("spot");
      scissor1.classList.remove("spot");
      scissor2.classList.remove("spot");
      rock1.classList.remove("spot");
      rock2.classList.remove("spot");
    } else if (user == "paper" && computer == "rock") {
      display.textContent = "YOU WIN";
      againbtn.style.color = "green";
      paper1.classList.add("spot");
      paper2.classList.remove("spot");
      scissor1.classList.remove("spot");
      scissor2.classList.remove("spot");
      rock1.classList.remove("spot");
      rock2.classList.remove("spot");
      ++score.textContent;
    } else if (user == "paper" && computer == "scissor") {
      display.textContent = "YOU LOSE";
      againbtn.style.color = "red";
      paper1.classList.remove("spot");
      paper2.classList.remove("spot");
      scissor1.classList.remove("spot");
      scissor2.classList.add("spot");
      rock1.classList.remove("spot");
      rock2.classList.remove("spot");
      --score.textContent;
    } else if (user == "rock" && computer == "scissor") {
      display.textContent = "YOU WIN";
      againbtn.style.color = "green";
      paper1.classList.remove("spot");
      paper2.classList.remove("spot");
      scissor1.classList.remove("spot");
      scissor2.classList.remove("spot");
      rock1.classList.add("spot");
      rock2.classList.remove("spot");
      ++score.textContent;
    } else if (user == "rock" && computer == "paper") {
      display.textContent = "YOU LOSE";
      againbtn.style.color = "red";
      paper1.classList.remove("spot");
      paper2.classList.add("spot");
      scissor1.classList.remove("spot");
      scissor2.classList.remove("spot");
      rock1.classList.remove("spot");
      rock2.classList.remove("spot");
      --score.textContent;
    } else if (user == "scissor" && computer == "rock") {
      display.textContent = "YOU LOSE";
      againbtn.style.color = "red";
      paper1.classList.remove("spot");
      paper2.classList.remove("spot");
      scissor1.classList.remove("spot");
      scissor2.classList.remove("spot");
      rock1.classList.remove("spot");
      rock2.classList.add("spot");
      --score.textContent;
    } else if (user == "scissor" && computer == "paper") {
      display.textContent = "YOU WIN";
      againbtn.style.color = "green";
      paper1.classList.remove("spot");
      paper2.classList.remove("spot");
      scissor1.classList.add("spot");
      scissor2.classList.remove("spot");
      rock1.classList.remove("spot");
      rock2.classList.remove("spot");
      ++score.textContent;
    }

    if (score.textContent < 1) {
      score.textContent = 0;
    }
  });
});

againbtn.addEventListener("click", () => {
  plyArea.style.display = "flex";
  selctedArea.style.display = "none";
});

const ruleInfo = document.getElementById("rules");
const rulebtn = document.getElementById("rulebtn");
const close = document
  .getElementById("closebtn")
  .addEventListener("click", () => {
    ruleInfo.style.display = "none";
  });

rulebtn.addEventListener("click", () => {
  ruleInfo.style.display = "block";
});

let gameSeq = [];
let userSeq = [];
let btnIds = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".btn");

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btnIds[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randBtn);
}
function checkAns() {
  console.log("current level:", level);
}
function btnPress() {
  let btn = this;
  userflash(btn);

  userColor = userflash.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);

  checkAns();
}

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game started");
    started = true;
    levelUp();
  }
});

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

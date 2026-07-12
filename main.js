const user_emoji = document.querySelector(".emojis");
const cpu_emoji = document.querySelector(".emojisCPU");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissor");
let user_choice;
let user_points = 0;
let cpu_points = 0;
const player_score = document.querySelector(".userScore");
const cpu_score = document.querySelector(".cpuScore");

function checkWinner(user, cpu) {
  if (user == 5) {
    alert("You wins!!! " + `Score : ${user} - ${cpu}`);
    return false;
  } else if (cpu == 5) {
    alert("Cpu Wins!! " + `Score : ${user} - ${cpu}`);
    return false;
  }

  return true;
}

function cpu_choice() {
  let choice = Math.random();

  if (choice >= 0 && choice <= 0.33) {
    cpu_emoji.textContent = "✊";
    return "Rock";
  } else if (choice >= 0.33 && choice <= 0.66) {
    cpu_emoji.textContent = "🖐";
    return "Paper";
  } else if (choice >= 0.66 && choice <= 1) {
    cpu_emoji.textContent = "✌️";
    return "Scissor";
  }
}

rock.addEventListener("click", function userRock() {
  user_choice = "Rock";
  user_emoji.textContent = "✊";
  let cpu = cpu_choice();
  if (cpu == "Paper") {
    cpu_points += 1;
  } else if (cpu == "Scissor") {
    user_points += 1;
  }

  let gamecontinue = checkWinner(user_points, cpu_points);

  if (gamecontinue == false) {
    user_points = 0;
    cpu_points = 0;
    player_score.textContent = 0;
    cpu_score.textContent = 0;
  }

  player_score.textContent = user_points;
  cpu_score.textContent = cpu_points;
});

paper.addEventListener("click", function userPaper() {
  user_choice = "Paper";
  user_emoji.textContent = "🖐";
  let cpu = cpu_choice();
  if (cpu == "Scissor") {
    cpu_points += 1;
  } else if (cpu == "Rock") {
    user_points += 1;
  }

  let gamecontinue = checkWinner(user_points, cpu_points);

  if (gamecontinue == false) {
    user_points = 0;
    cpu_points = 0;
    player_score.textContent = 0;
    cpu_score.textContent = 0;
  }

  player_score.textContent = user_points;
  cpu_score.textContent = cpu_points;
});

scissors.addEventListener("click", function userScissor() {
  user_choice = "Scissor";
  user_emoji.textContent = "✌️";
  let cpu = cpu_choice();
  if (cpu == "Rock") {
    cpu_points += 1;
  } else if (cpu == "Paper") {
    user_points += 1;
  }

  let gamecontinue = checkWinner(user_points, cpu_points);

  if (gamecontinue == false) {
    user_points = 0;
    cpu_points = 0;
    player_score.textContent = 0;
    cpu_score.textContent = 0;
  }

  player_score.textContent = user_points;
  cpu_score.textContent = cpu_points;
});

function getComputerChoice() {
  value = Math.random();

  if (value >= 0 && value <= 0.33) {
    return "rock";
  } else if (value >= 0.33 && value <= 0.66) {
    return "paper";
  } else if (value >= 0.66 && value <= 1) {
    return "scissor";
  }
}

function gethumanChoice(choice) {
  choice = prompt("Enter your choice");
  return choice;
}

const cpu = getComputerChoice();

const user = gethumanChoice();
let total_human_points, total_cpu_points;

if (user == "rock" && cpu == "paper") {
  console.log("Cpu chose Paper!! It wins");
} else if (user == "paper" && cpu == "rock") {
  console.log("You wins!! Cpu chose rock");
} else if (user == "scissor" && cpu == "paper") {
  console.log("You wins!! Cpu chose paper");
} else if (user == "paper" && cpu == "scissor") {
  console.log("Cpu chose Scissor!! It wins");
} else if (user == "scissor" && cpu == "rock") {
  console.log("Cpu chose rock!! It wins.");
} else if (user == "rock" && cpu == "scissor") {
  console.log("You wins!! Cpu chose scissor");
} else if (user == "rock" && cpu == "rock") {
  console.log("Draw!!");
} else if (user == "scissor" && cpu == "scissor") {
  console.log("Draw!!");
} else if (user == "paper" && cpu == "paper") {
  console.log("Draw");
}

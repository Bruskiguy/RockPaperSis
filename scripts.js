

const rps = ["ROCK", "PAPER", "SCISSORS"];

let playerSelection = window.prompt("ROCK, PAPER, or SCISSORS?")

let comSel =  Math.floor(Math.random() * rps.length);

let computerPlay = (rps[comSel]);

console.log(rps[computerPlay]);


console.log(playerSelection, computerPlay);
/* Need to change both to strings? */

/* Game Logic*/

if (playerSelection === "ROCK") {
    if (computerPlay === "ROCK")
        alert("Tie: Both selected ROCK");
    else if (computerPlay === "PAPER")
        alert("You Lose! PAPER beats ROCK");
    else (computerPlay === "SCISSORS")
        alert("You Won! ROCK beats SCISSORS");
} 
else if (playerSelection === "PAPER") {
    if (computerPlay === "PAPER")
        alert("TIE: Both selected PAPER");
    else if (computerPlay === "ROCK")
        alert("You Won! PAPER beats ROCK");
    else (computerPlay === "SCISSORS")
        alert("You Lose! SCISSORS beats PAPER");
} else if (playerSelection === "SCISSORS") {
    if (computerPlay === "SCISSORS")
        alert("TIE: Both selected SCISSORS");
    else if (computerPlay === "PAPER")
        alert("You Won! SCISSORS beats PAPER");
    else if (computerPlay === "ROCK")
        alert ("You Lose! ROCK beats SCISSORS");}
// JavaScript Lab Part One
// Task: Prompt the user if they would like to play the game with two characters - the user and the Almighty Grant. If yes, prompt the user to name their character. Run a while loop that will iterate until either the character has beat Grant three times or the character has been defeated.
//
// What does the application do?
// The user is prompted to play a game. If the user chooses yes, the user is prompted to enter his or her name.
// The game will use a while loop to simulate a turn-based fight between the user and Grant.
// Each iteration of the while loop will remove health points from both the user and Grant until either the user or Grant has no health points remaining.
// When health points for either the user is at 0, the round ends.
// The game ends either when a) Grant has been defeated 3 times (has hit 0 health points 3 times) or b) the user has been defeated (hit 0 health points).
// When the game is over, the application logs the winner.

var gameStart = prompt("Would you like to play a game?");

if (gameStart.toLowerCase() === "yes") {
  var name = prompt("What is your name?");
  var userHealth = 40;
  var grantHealth = 10;
  var winCount = 0;


  while (userHealth > 0) {
    userHealth -= Math.floor((Math.random()*3) + 1);
    grantHealth -= Math.floor((Math.random()*2) + 1);

    console.log(name + " has " + userHealth + "hp");
    console.log("Grant has " + grantHealth + "hp");

    if (userHealth <= 0) {
      console.log("You lose! Grant wins!");
    } else if (grantHealth <= 0 && winCount === 6) {
      winCount++;
      console.log("Grant is defeated! " + name + " wins!");
      break;
    } else if (grantHealth <= 0) {
      winCount++;
      console.log("Grant is defeated! You must still win " + (3 - winCount) + " more time(s).");
      grantHealth = 10;
    }
  }
}

// Build Specifications:
// The application must prompt the user for his or her name and use it throughout the game.
// The user starts with 40 “health points.” Grant starts with 10 “health points.”
// For each time that Grant’s health points hit 0, he is “defeated” and the user gains 1 “win.”
// Grant’s health points are reset to 10 after each time he hits 0 points. The user’s health points never reset.
// The application tracks the number of times the user has won.
// The application logs the progress of the fight after each iteration of the loop.

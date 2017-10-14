// JavaScript Lab Part Two
// Task: Expand on the game by adding functions that allow the user to start the game and get a number to use as damage.
//
// What does the application do?
// The application now has a startGame function, which will prompt the user if they would like to play. Call the startCombat function after the user enters a character’s name.
// There is a startCombat function. When executed, this will run the loop you created in Part One.
// There is a getDamage function. This will return a number between 1 and 5 that will be used to decide how much damage the user and Grant will deal each round.

function startGame() {
  var gameStart = prompt("Would you like to play a game?");

  if (gameStart.toLowerCase() === "yes") {
    var name = prompt("What is your name?");
    startCombat(name);
  }
}

function startCombat(name) {
  var userHealth = 40;
  var grantHealth = 10;
  var winCount = 0;

  while (userHealth > 0) {
    userHealth -= getDamage();
    grantHealth -= getDamage();

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

function getDamage() {
  return Math.floor((Math.random() * 5) + 1);
}

startGame();

// Build Specifications:
// Each iteration of the loop will include a prompt that will ask the user if they would like to “attack” or “quit”.
// If the user decides to attack, adjust the character’s health points and Grant’s health points based on the getDamage function.
// If the user decides to quit, figure out a way to exit out of the loop and function.

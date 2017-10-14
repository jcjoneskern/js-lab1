// JavaScript Lab Part Three
// Task: Convert the variables relating to Grant and the user’s character into objects. Add a heal method to the character’s object. The user can only heal two times throughout the duration of the game.
//
// What does the application do?
// The character is now an object.
// Grant is now an object.
// The properties attack and heal are methods for the character object, and attack is a method for the Grant object.
// Make sure the game tracks the character’s heal usage.

var player = {
  name: "",
  health: 40,
  wins: 0,
  healCount: 0,
  attack: function() {
    return Math.floor((Math.random() * 3) + 1);
  },
  heal: function() {
    this.healCount++;
    return Math.floor((Math.random() * 10) + 1);
  }
}

var grant = {
  name: "Grant",
  health: 10,
  attack: function() {
    return Math.floor((Math.random() * 5) + 1);
  }
}

function startGame() {
  var gameStart = prompt("Would you like to play a game?");

  if (gameStart.toLowerCase() === "yes") {
    var name = prompt("What is your name?");
    startCombat(name);
  }
}

function startCombat(name) {
  player.name = name;

  while (player.health > 0) {
    var userChoice = prompt("Attack, Heal, or Quit?");

    if (userChoice.toLowerCase() === "attack") {
      player.health -= grant.attack();
      grant.health -= player.attack();

      console.log(player.name + " has " + player.health + "hp");
      console.log("Grant has " + grant.health + "hp");

      if (player.health <= 0) {
        console.log("You lose! Grant wins!");
      } else if (grant.health <= 0 && player.wins === 2) {
        player.wins++;
        console.log("Grant is defeated! " + player.name + " wins!");
        break;
      } else if (grant.health <= 0) {
        player.wins++;
        console.log("Grant is defeated! You must still win " + (3 - player.wins) + " more time(s).");
        grant.health = 10;
      }
    } else if (userChoice.toLowerCase() === "quit") {
      console.log("Got away safely!");
      break;
    } else if (userChoice.toLowerCase() === "heal") {
      if (player.healCount < 2) {
        player.heal();
        console.log(player.name + " heals and has " + player.health + "hp. " + player.name + " has used " + player.healCount + " out of 2 heal casts.");
        player.health -= grant.attack();
        console.log("Grant attacks! " + player.name + " now has " + player.health + "hp");
      } else {
        console.log(player.name + " can no longer heal! Choose another option.");
      }
    } else {
      alert("You must enter \"attack,\" \"heal,\" or \"quit.\"");
    }
  }
}

// Build Specifications:
// The character must have the following properties
// name, health, wins, healCount, attack, and heal
// Grant must have the following properties
// name, health, attack
// The user’s attack method should return a number between 1 and 3 (this has changed from the original numbers).
// The user’s heal method should add a number between 1 and 10 to the character’s health and change the healCount number.
// Grant’s attack method should return a number between 1 and 5.

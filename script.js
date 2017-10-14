// JavaScript Lab Part Four
// Task: Implement a front-end for your game based on the wireframes given to you.
//
// What does the application do?
// Displays the character’s name, health, heal count, and wins.
// Displays Grant’s name and health.
// Allows the user to click a button to:
// Start the game
// Choose to attack
// Choose to heal
// Choose to quit
// Each time the user selects an action, the app will display text to let the user know what has happened that round.

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

  player.name = prompt("What is your name?")
}

function startCombat(action) {

  if (action === "attack") {
    player.health -= grant.attack();
    grant.health -= player.attack();

    console.log(player.name + " has " + player.health + "hp");
    console.log("Grant has " + grant.health + "hp");

    if (player.health <= 0) {
      console.log("You lose! Grant wins!");
    } else if (grant.health <= 0 && player.wins === 2) {
      player.wins++;
      console.log("Grant is defeated! " + player.name + " wins!");
    } else if (grant.health <= 0) {
      player.wins++;
      console.log("Grant is defeated! You must still win " + (3 - player.wins) + " more time(s).");
      grant.health = 10;
    }
  }

  if (action === "heal") {
    if (player.healCount < 2) {
      player.heal();
      console.log(player.name + " heals and has " + player.health + "hp. " + player.name + " has used " + player.healCount + " out of 2 heal casts.");
      player.health -= grant.attack();
      console.log("Grant attacks! " + player.name + " now has " + player.health + "hp");
    } else {
      console.log(player.name + " can no longer heal! Choose another option.");
    }
  }

  if (action === "quit") {
    console.log("Got away safely!");
  }
}

// Build Specifications:
// The start button will execute the startGame function, which creates the character and Grant object.
// The attack, heal, and quit buttons will execute the startCombat function with an argument describing what action they have chosen, which will no longer contain the while loop.
// The startCombat function will execute two functions:
// One function will update the character and Grant’s information within the DOM
// One function will update the text relating to what has happened during the round

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

var player;
var grant;

function startGame() {
  player = {
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

  grant = {
    name: "Grant",
    health: 10,
    attack: function() {
      return Math.floor((Math.random() * 5) + 1);
    }
  }

  player.name = prompt("What is your name?");
  updateStats();
  document.getElementById("start-btn").style.display = "none";
  document.getElementsByTagName("main")[0].style.display = "block";
}

function startCombat(action) {

  if (action === "attack") {
    player.health -= grant.attack();
    grant.health -= player.attack();

    var message = player.name + " has " + player.health + "hp. Grant has " + grant.health + "hp.";

    if (player.health <= 0) {
      message += " You lose! Grant wins!";
    } else if (grant.health <= 0 && player.wins === 2) {
      player.wins++;
      message += " Grant is defeated! " + player.name + " wins!";
    } else if (grant.health <= 0) {
      player.wins++;
      message += " Grant is defeated! You must still win " + (3 - player.wins) + " more time(s).";
      grant.health = 10;
    }
    updateMessage(message);
    updateStats();
  }

  if (action === "heal") {
    if (player.healCount < 2) {
      player.heal();
      var message = player.name + " heals and has " + player.health + "hp. " + player.name + " has used " + player.healCount + " out of 2 heal casts.";

      player.health -= grant.attack();
      message += "Grant attacks! " + player.name + " now has " + player.health + "hp";

      if (player.health <=0) {
        message += " You lose! Grant wins!"
      }

      updateMessage(message);
      updateStats();
    } else {
      var message = player.name + " can no longer heal! Choose another option.";

      updateMessage(message);
    }
  }

  if (action === "quit") {
    var message = "Got away safely!";

    updateMessage(message);
  }
}

function updateMessage(message) {
  document.getElementById("msg").textContent = message;
}

function updateStats() {
  document.getElementById("p-name").textContent = player.name;
  document.getElementById("p-health").style.width = (player.health/40) * 100 + "%";
  document.getElementById("p-heal").style.width = 100 - ((player.healCount/2) * 100) + "%";
  document.getElementById("p-wins").style.width = (player.wins/3) * 100 + "%";

  document.getElementById("e-name").textContent = grant.name;
  document.getElementById("e-health").style.width = (grant.health/10) * 100 + "%";

  // document.getElementById("p-health").textContent = player.health;
  // document.getElementById("p-heal").textContent = player.healCount;
  // document.getElementById("p-wins").textContent = player.wins;
  // document.getElementById("e-health").textContent = grant.health;
}

// Build Specifications:
// The start button will execute the startGame function, which creates the character and Grant object.
// The attack, heal, and quit buttons will execute the startCombat function with an argument describing what action they have chosen, which will no longer contain the while loop.
// The startCombat function will execute two functions:
// One function will update the character and Grant’s information within the DOM
// One function will update the text relating to what has happened during the round

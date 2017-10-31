var player;
var grant;

class Player {
  constructor (name, health) {
    this.name = name;
    this.health = health;
    this.attack = function() {
      return Math.floor((Math.random() * 3) + 1);
    }
  }
}

class User extends Player {
  constructor(name, health) {
    super(name, health, attack);
    this.heal = function() {
      this.healCount++;
      this.health += Math.floor((Math.random() * 10) + 1);
    }
    this.wins = 0;
    this.healCount = 0;
  }
}

function startGame() {
  grant = new Player("GRANT", 10);
  player = new User(prompt("What is your name?").toUpperCase(), 40);
  updateStats();
  document.getElementById("start-btn").style.display = "none";
  document.getElementsByTagName("main")[0].style.display = "block";
}

function attack() {
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

function heal() {
  if (player.healCount < 2) {
    player.heal();
    var message = player.name + " heals and has " + player.health + "hp. " + player.name + " has used " + player.healCount + " out of 2 heal casts.";

    player.health -= grant.attack();
    message += "Grant attacks! " + player.name + " now has " + player.health + "hp";

    if (player.health <= 0) {
      message += " You lose! Grant wins!"
    }

    updateMessage(message);
    updateStats();
  } else {
    var message = player.name + " can no longer heal! Choose another option.";

    updateMessage(message);
  }
}

function run() {
  var message = "Got away safely!";

  updateMessage(message);
}

function updateMessage(message) {
  document.getElementById("msg").textContent = message;
}

function updateStats() {
  document.getElementById("p-name").textContent = player.name;
  document.getElementById("p-health").value = player.health;
  document.getElementById("p-heal").value = player.healCount;
  document.getElementById("p-wins").value = player.wins;

  document.getElementById("e-name").textContent = grant.name;
  document.getElementById("e-health").value = grant.health;
}
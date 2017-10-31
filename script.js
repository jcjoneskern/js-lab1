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
    name: "GRANT",
    health: 10,
    attack: function() {
      return Math.floor((Math.random() * 5) + 1);
    }
  }

  player.name = prompt("What is your name?").toUpperCase();
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
  document.getElementById("p-health").value = player.health;
  document.getElementById("p-heal").value = player.healCount;
  document.getElementById("p-wins").value = player.wins;

  document.getElementById("e-name").textContent = grant.name;
  document.getElementById("e-health").value = grant.health;
}
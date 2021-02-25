var playerName = window.prompt("What is your robot's name?");
var playerHealth = 10;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", " Amy Android ", " Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


var fight = function(enemyName) {
  //ask player if they would like to fight or flight
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    while(enemyHealth > 0 && playerHealth > 0) {
      

          // if player choses to skip
  if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);

    break;
   }
  //if player choses to fight
   
  //start the fight 
 
  }


    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;
      break;
    } 

    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } 
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
}

// fight each enemy-robot by looping over them and fighting them one at a time
for(var i= 0; i < enemyNames.length; i++) {
  // if player still alive, keep fighting
  if(playerHealth > 0) {
    //alert player of the round number
    window.alert("Welcome to Robot Gladiators! Round" + (i + 1));

    //pick new enemy based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    enemyHealth = 50;

    fight(pickedEnemyName);
  }
    //if player is not alive, stop the game
    else {
      window.alert("You have lost your robot fight. Game Over!");
    }
  }
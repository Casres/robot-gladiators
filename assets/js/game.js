

console.time('abc');

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10; 
var playerMoney = 10;

// console.log("Name: " + playerName + ", Player attack pts: " + playerAttack + ", Health: " + playerHealth + " pts: " + playerMoney);

var enemyNames = [" Roboto", " Amy Android", " Robo Trumble"];
var enemyHealth = 50; 
var enemyAttack = 12; 
// console.log("Here are your enemys names:" + enemyNames); 

// for (var i = 0; i < enemyNames.length; i++){
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }

var fight = function(enemyName) {

    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0) {
        
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
        // if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // reward player for not skipping 
            playerMoney = playerMoney + 1;
            window.alert("You've been awarded +1 pts for not skipping, congrats!");
            console.log(playerName + " Now has " + playerMoney + ".")
            // remove enemy's health by subtracting the amount set in the playerAttack variable 
            enemyHealth = enemyHealth - playerAttack; 
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            } else {
                window.alert(enemyName + " stll has " + enemyHealth + " health left.");
            }
            
            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
    
            // checking players health 
            if (playerHealth <=0) {
                window.alert(playerName + " has died!");
            } else {
                window.alert(playerName + " has " + playerHealth + " health left.")
            };
    
            // if player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.prompt("Are you sure you'd like to skip, type Y or N.");
            // if yes (true), leave fight
            if (confirmSkip === "y" || confirmSkip === "Y") {
                window.alert(playerName + " has decided to skip this fight.")
                console.log(playerName + " has decided to skip this fight.")
                // subtract player money 
                playerMoney = playerMoney - 2;
                console.log(
                    playerName + " now has " + playerMoney + " pts left. -2 points for skipping round."
                )
            }
    
            // if no (false), ask question again by running fight() again
            else if (confirmSkip === "n" || confirmSkip === "N") {
                    fight(enemyNames[i]);
            }
    
        } else {
            window.alert ("You need to choose a valid option, please try again");
        }


    }

    
}

for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
console.timeEnd('abc');
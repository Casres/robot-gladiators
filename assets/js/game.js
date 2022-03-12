

console.time('abc');

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 80;
var playerAttack = 10; 
var playerMoney = 10;

// console.log("Name: " + playerName + ", Player attack pts: " + playerAttack + ", Health: " + playerHealth + " pts: " + playerMoney);

var enemyNames = [" Roboto", " Amy Android", " Robo Trumble"];
var enemyHealth = 40; 
var enemyAttack = 12; 
// console.log("Here are your enemys names:" + enemyNames); 

// for (var i = 0; i < enemyNames.length; i++){
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }




var fight = function(enemyName) {

    if (playerHealth > 0) {

            // let the player know what round they are in (remeber) that arrays start at zero so add 1
            window.alert("welcome " + playerName + " to Robot Gladiators! Your oppontent is" + enemyName +". Round" + (i + 1) );
            
            console.log("Welcome to Roboto Gladiators")
            // pick new names to fight based on the index of the enemyNames array
            var pickedEnemyName = EnemyNames[i]; 
            
            // reset the enemyHealth before starting a new fight/round
            enemyHealth = 50;

            // pass the pickedEnemyName variable's value into the fight function (this will assume the valu of the enemyName parameter)
            fight(pickedEnemyName);
        }

    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth >= 0 && enemyHealth >= 0) {
        
        // asking player if they would like to fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
        // if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // reward player for not skipping 
            playerMoney = playerMoney + 1;
            window.alert("You've been awarded +1 pts for not skipping, congrats!");
            console.log("You've been awarded +1 pts for not skipping, congrats!");
            console.log(playerName + " Now has " + playerMoney + "pts.")
            // remove enemy's health by subtracting the amount set in the playerAttack variable 
            enemyHealth = enemyHealth - playerAttack; 
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
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
                break;
            } else {
                window.alert(playerName + " has " + playerHealth + " health left.")
            };
    
            // if player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.prompt("Are you sure you'd like to skip, type Y or N.");
            // if yes (true), leave fight
            if (confirmSkip === "y" || confirmSkip === "Y") {
                window.alert(playerName + " has decided to skip" + enemyName +"'s fight.")
                console.log(playerName + " has decided to skip" + enemyName +"'s fight.")
                // subtract player money 
                playerMoney = playerMoney - 10;
                console.log(
                    playerName + " now has " + playerMoney + " pts left. -10 points for skipping round."
                );
                break;
            }
    
            // if no (false), ask question again by running fight() again
            else if (confirmSkip === "n" || confirmSkip === "N") {
                var pickedEnemyName = enemyName[i];
                enemyHealth = 40;
                fight(enemyNames[i]);
            }
    
        } else {
            window.alert ("You need to choose a valid option, please try again");
        }


    }

    
}

// function robotGladiator() {
    
//     var newRound = function(playerHealth) {
//         window.alert("welcome " + playerName + " to Robot Gladiators! Your oppontent is" + enemyName +".")
//         console.log("Welcome to Roboto Gladiators")
//     }
// }

for (var i = 0 ; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i]; 
    enemyHealth = 40;
    fight(pickedEnemyName);
}



console.timeEnd('abc');

// for (var i = 0; i < enemyNames.length; i++) {
//     // debugger;
//     // call fight functiom with enemy-robot
//     fight(enemyNames[i]);
// }



// fight();

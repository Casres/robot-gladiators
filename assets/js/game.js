

console.time('abc');

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10; 
var playerMoney = 10;

console.log("Name: " + playerName + ", Player attack pts: " + playerAttack + ", Health: " + playerHealth + " pts: " + playerMoney);

var enemyName = 'Roboto';
var enemyHealth = 50; 
var enemyAttack = 12; 

var fight = function() {

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
            // subtract player money 
            playerMoney = playerMoney - 2;
            console.log(
                playerName + " now has " + playerMoney + " pts left. -2 points for skipping round."
            )
        }

        // if no (false), ask question again by running fight() again
        else if (confirmSkip === "n" || confirmSkip === "N") {

            fight();
        }

    } else {
        window.alert ("You need to choose a valid option, please try again");
    }
}

fight();
console.timeEnd('abc');
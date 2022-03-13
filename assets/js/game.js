

console.time('abc');

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 50;
var playerAttack = 10; 
var playerMoney = 10;

// console.log("Name: " + playerName + ", Player attack pts: " + playerAttack + ", Health: " + playerHealth + " pts: " + playerMoney);

var enemyNames = [" Roboto", " Amy Android", " Robo Trumble"];
var enemyHealth = 40; 
var enemyAttack = 12; 

var startGame = function() {

    for (var i = 0; i < enemyNames.length; i++)
        
    if (playerHealth > 0) {
        

        // let the player know what round they are in (remember) that arrays start at zero so add 1
        window.alert("welcome " + playerName + " to Robot Gladiators! Your oppontent is" + enemyNames +". Round" + (i + 1) );
        
        console.log("Welcome to Roboto Gladiators")
        // pick new names to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i]; 
        
        // reset the enemyHealth before starting a new fight/round
        enemyHealth = 50;

        // reset player health
        playerHealth = 100;

        // pass the pickedEnemyName variable's value into the fight function (this will assume the value of the enemyName parameter)
        fight(pickedEnemyName);

        
    } else {
        window.alert("You robot has no more health! Game over!");
    }

}


debugger

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!!");
    if (playerHealth > 0) {
        window.alert("great job, you survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    if (playAgainConfirm) {
        window.confirm("Would you like to play again?");
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }



    
}





var fight = function(enemyName) {

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
                playerMoney = playerMoney - 3;
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

};





startGame();

endGame();

console.timeEnd('abc');


// fight();

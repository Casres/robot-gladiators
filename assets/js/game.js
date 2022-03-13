

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

        // this is basically saying when the last item in the array is done, no mo shop.
        if (playerHealth > 0 && i < enemyNames.length - 1) {

            // asking the player if they would like to go into the shop
            var storeConfirm = window.confirm("The fight is over, would you like to visit the store before the next round?");

            if (storeConfirm){
                shop();
            }
            
        }

    } else {
        window.alert("You robot has no more health! Game over!");
    }

    endGame();

}


var endGame = function() {

    window.alert("The game has now ended. Let's see how you did!!");
    if (playerHealth > 0) {
        window.alert("great job, you survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    // asking the player if they would like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

}


var shop = function() {
    console.log("You have entered the shop.");

    var shopOptionPrompt = window.prompt("Please enter one, would you like to REFILL ~ health, UPGRADE ~ attack or EXIT?");

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if(playerMoney >= 7) {

            window.alert("Refill Health +20 = 7 pts.");

            playerHealth = playerHealth + 8;
            playerMoney = playerMoney - 7;

            } else {
                window.alert("Insufficient Funds");
            }
            
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {

                window.alert("Upgrade Attack +3 = 7pts")

                playerAttack = playerAttack + 3;
                playerMoney = playerMoney - 7;

            } else {
                window.alert("Insufficient Funds");
            }
            
            break;

        case "EXIT": 
        case "exit":
            window.alert("Exit store."); 

            break;

        default:
            window.alert("Not a valid option, please pick again.");

            shop();

            break;
    }

};

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

console.timeEnd('abc');




console.time('abc');

var playerInfo = {
    Name: window.prompt("What is your robot's name?"),
    health: 70,
    attack: 10,
    money: 10
};

var enemyInfo = [
    {name: "Roborto", attack: (10,12)},

    {name: "Amy Android", attack: (10,13)},

    {name: "Trumble", attack: (10,14)},
];


var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };

var startGame = function() {

    for (var i = 0; i < enemyInfo.length; i++)
        
    if (playerInfo.health > 0) {
        
        // let the player know what round they are in (remember) that arrays start at zero so add 1
        window.alert("welcome " + playerInfo.name + " to Robot Gladiators! Your oppontent is" + enemy.names +". Round" + (i + 1) );
        
        console.log("Welcome to Roboto Gladiators")
        // pick new names to fight based on the index of the enemy.names array
        var pickedEnemyObj = enemyInfo[i]; 
        
        // reset the enemy.health before starting a new fight/round
        pickedEnemyObj.health = randomNumber(40, 60);


        // pass the pickedenemy.name variable's value into the fight function (this will assume the value of the enemy.name parameter)
        fight(pickedEnemyObj);

        // this is basically saying when the last item in the array is done, no mo shop.
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

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
    if (playerInfo.health > 0) {
        window.alert("great job, you survived the game! You now have a score of " + playerInfo.money + ".");
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
            if(playerInfo.money >= 7) {

            window.alert("Refill Health +20 = 7 pts.");

            playerInfo.health = playerInfo.health + 8;
            playerInfo.money = playerInfo.money - 7;

            } else {
                window.alert("Insufficient Funds");
            }
            
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerInfo.money >= 7) {

                window.alert("Upgrade Attack +3 = 7pts")

                playerInfo.attack = playerInfo.attack + 3;
                playerInfo.money = playerInfo.money - 7;

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

var fight = function(enemy) {
    console.log(enemy);

    while(playerInfo.health >= 0 && enemy.health >= 0) {
        
        // asking player if they would like to fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
        // if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // reward player for not skipping 
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            window.alert("You've been awarded +1 pts for not skipping, congrats!");
            console.log("You've been awarded +1 pts for not skipping, congrats!");
            console.log(playerInfo.name + " Now has " + playerInfo.money + "pts.")

            // generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            // remove enemy's health by subtracting the amount set in the playerInfo.attack variable 
            enemy.health = Math.max(0, enemy.health - damage);
            
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
            // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                break;
            } else {
                window.alert(enemy.name + " stll has " + enemy.health + " health left.");
            }
            
            // generate random damage value based on player's attack power
            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            // remove player's health by subtracting the amount set in the enemy.attack variable
            playerInfo.health = Math.max(0, playerInfo.health - damage);

            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );
    
            // checking players health 
            if (playerInfo.health <=0) {
                window.alert(playerInfo.name + " has died!");
                break;
            } else {
                window.alert(playerInfo.name + " has " + playerInfo.health + " health left.")
            };
    
            // if player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.prompt("Are you sure you'd like to skip, type Y or N.");
            // if yes (true), leave fight
            if (confirmSkip === "y" || confirmSkip === "Y") {
                window.alert(playerInfo.name + " has decided to skip" + enemy.name +"'s fight.")
                console.log(playerInfo.name + " has decided to skip" + enemy.name +"'s fight.")
                // subtract player money 
                playerInfo.money = playerInfo.money - 3;
                console.log(
                    playerInfo.name + " now has " + playerInfo.money + " pts left. -10 points for skipping round."
                );
                break;
            }
    
            // if no (false), ask question again by running fight() again
            else if (confirmSkip === "n" || confirmSkip === "N") {
                var pickedenemy.name = enemy.name[i];
                enemy.health = 40;
                fight(enemy.names[i]);
            }
    
        } else {
            window.alert ("You need to choose a valid option, please try again");
        }

    }

};


startGame();

console.timeEnd('abc');


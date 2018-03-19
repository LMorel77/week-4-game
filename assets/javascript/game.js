$(document).ready(function () {

    var counter = 0;
    var crystalId = ["#crystal1", "#crystal2", "#crystal3", "#crystal4"];
    var crystalRandNum = [];
    var losses = 0;
    var messages = ["No pressure, you got this!", "This is fun right!", "Getting nervous?", "You can do this!", "Squirrel!!!"];
    var score = 0;
    var wins = 0;

    // Function to Generate and Set Computer & Crystal Random Numbers
    // Formula: Math.floor(Math.random() * (max - min + 1)) + min
    function genRandNum(array1, array2, intVar) {
        for (var i = 0; i < 4; i++) {
            array1[i] = Math.floor(Math.random() * 12) + 1;
            $(array2[i]).val(array1[i]);
        };
        intVar = Math.floor(Math.random() * 102) + 19;
        return intVar;
    };

    // Generating Computer and Crystal Random Numbers    
    var computerRandNum = genRandNum(crystalRandNum, crystalId, computerRandNum);

    // Printing Default Values
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#randomNum").text(computerRandNum);
    $("#score").text(score);
    $("#message").text("Welcome!");

    // Game Play
    $(".button").on("click", function() {

        counter++;

        // Message Output - Determined By Counter
        if (counter == 1) {
            $("#message").text("Good luck!");
        } else {
            for (var i = 0; i < messages.length; i++) {
                var messageIndex = Math.floor(Math.random() * 5);
                $("#message").text(messages[messageIndex]);
            };
        };

        // Incrementing and Printing Updated Score
        var crystalValue = parseInt($(this).val());
        score += crystalValue;        
        $("#score").text(score);

        // IF User Wins, Execute This Code
        if (score === computerRandNum) {
            wins++;
            score = 0;
            computerRandNum = genRandNum(crystalRandNum, crystalId, computerRandNum);
            $("#randomNum").text(computerRandNum);
            $("#wins").text(wins);
            $("#score").text(score);
            // Just Some Messaging
            if (wins > 1) {
                $("#message").text("You Win Again! Best of " + (wins + 2) + "?");
            } else {
                $("#message").text("You Win! Shall we play again?");
            };
        };
        // IF User Loses, Execute This Code
        if (score > computerRandNum) {
            losses++;
            score = 0;
            computerRandNum = genRandNum(crystalRandNum, crystalId, computerRandNum);
            $("#randomNum").text(computerRandNum);
            $("#losses").text(losses);
            $("#message").text("Bummer! You lost! Try again?");
            $("#score").text(score);
        };
    });

});


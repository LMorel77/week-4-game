$(document).ready(function () {

    var crystalValues = [];
    var gameStarted = false;
    var losses = 0;
    var randomNum;
    var score = 0;
    var wins = 0;

    // Random Number Formula: Math.floor(Math.random() * (max - min + 1)) + min
    
    function genCrystalRandNum (array) {
        // Assign random numbers to crystals 
        var newValues = array;
        for (var i = 0; i < 4; i++) {
            newValues[i] = Math.floor(Math.random() * 12) + 1;
        };
        // Why isn't 'return' required?
    };

    // Generating computer and crystal random numbers
    randomNum = Math.floor(Math.random() * 102) + 19;
    genCrystalRandNum(crystalValues);

    // Checking Values
    // console.log("crystalValues[0]: " + crystalValues[0]);
    // console.log("crystalValues[1]: " + crystalValues[1]);
    // console.log("crystalValues[2]: " + crystalValues[2]);
    // console.log("crystalValues[3]: " + crystalValues[3]);
    // console.log("randomNum: " + randomNum);

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#randomNum").text(randomNum);
    $("#score").text(score);
    $("#message").text("Welcome!");

    // $(".button").on("click", function() {
    //     gameStarted = true;

    // })

});


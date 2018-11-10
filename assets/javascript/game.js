
var targetNumber = 87;
$("#number-to-guess").text(targetNumber);
var wins = 0;
var losses = 0;
var counter = 0;
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var numberOptions = [
    {
        val: 10,
        img: "assets/images/crystal1.jpg"
    },
    {
        val: 2,
        img: "assets/images/crystal2.jpg"
    },
    {
        val: 5,
        img:
            "assets/images/crystal3.jpg"
    },
    {
        val: 6,
        img:
            "assets/images/crystal1.jpg"
    },
];
function reset() {
    targetNumber = 0;
    counter = 0;
}
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", numberOptions[i].img);
    imageCrystal.attr("data-crystalvalue", numberOptions[i].val);
    $("#crystals").append(imageCrystal);
}

var increment = numberOptions[Math.round(Math.random())];

$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("New score: " + counter);
    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        reset()
    }
    else if (counter >= targetNumber) {
        alert("You lose!!");
        losses++;
        reset()
    }
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;

});




$().click(function () {
    crystalValue.reload();
});


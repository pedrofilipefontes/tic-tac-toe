//jshint esversion:6
const endGame = (winner) => { //function to end the game

    endCalled = true;
    setTimeout(() => {
        $("#game-stage").hide();

        document.querySelector("#game-over").removeAttribute("hidden");

        $("#winner-name").text(winner);

    }, 300);

};
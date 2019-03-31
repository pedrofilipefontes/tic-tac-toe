//jshint esversion:6
const endGame = (winner) => { //function to end the game
  setTimeout(() => {
    $("#game-stage").hide();
    $("#game-over").show();
    $("#winner-name").text(winner);

  }, 300);

};
//jshint esversion:6

const endGame = (winner) => { //function to end the game
  $("#game-stage").hide();
  $("#game-over").show();
  $("#winner-name").text(winner);
};
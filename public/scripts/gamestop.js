//jshint esversion:6
const endGame = (winner) => { //function to end the game

  endCalled = true;
  setTimeout(() => {
    $("#game-stage").hide();
    $("#game-over").show();
    $("#winner-name").text(winner);

  }, 300);

};
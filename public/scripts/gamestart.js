//jshint esversion:6
$("#game-over").hide();
$("#game-stage").hide();

$(document).ready(() => {


    const startGame = (numOfPlayers) => { // function to start the game

        function applyClickGame() { // start this when there is a click on start on an empty cell

            insertIcon(this.id); //call the function to insert an icon in the empty cell

            if (numOfPlayers == 1) {
                computerMove();
            }

            if (moves >= 5 && moves <= 9) { //when number of moves reaches 5, start checking if there is winner
                checkResult();
            }
        }

        for (let i = 1; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                document.getElementById(`cell-${i}${j}`).addEventListener('click', applyClickGame);
            }
        }
    };



    $("#multi-player").on('click', () => {

        document.getElementById("friend-name").removeAttribute("hidden");
        playersNum = 2;
    }); //select 2 players

    $('#single-player').on('click', () => {
        document.getElementById("friend-name").setAttribute("hidden", "");
        playersNum = 1;
    }); //select 1 player


    $('#start-button').on('click', () => {

        startGame(processNames(playersNum));

    });


});
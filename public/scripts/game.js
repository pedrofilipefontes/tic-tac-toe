//jshint esversion:6


$(document).ready(() => {


    const startGame = (numOfPlayers) => { // function to start the game

        function applyClickGame () { // start this when there is a click on start on an empty cell

            insertIcon(this.id); //call the function to insert an icon in the empty cell

            if (numOfPlayers == 1 && endCalled == false) {
                computerMove();
            }
        }

        for (let i = 1; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                $(`#cell-${i}${j}`).on('click', applyClickGame);
            }
        }
    };



    $("#multi-player").on('click', () => {

        $("#friend-name").removeAttr("hidden");
        playersNum = 2;
    }); //select 2 players

    $('#single-player').on('click', () => {
        $("#friend-name").attr("hidden", "");
        playersNum = 1;
    }); //select 1 player


    $('#start-button').on('click', () => {

        startGame(processNames(playersNum));

    });

});
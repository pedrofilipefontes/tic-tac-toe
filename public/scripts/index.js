//jshint esversion:6

$(document).ready(() => {

    let playersNum = 1; //define initial number of players
    let playerOneName;
    let playerTwoName;
    
    $("#game-over").hide();
    $("#game-stage").hide();

    $("#multi-player").on('click', () => {
        $('<input id="friend-name" class="mb-3" type="text" placeholder="Player 2" autocomplete="off">').insertAfter('#your-name');
        playersNum = 2;
    }); //select 2 players

    $('#single-player').on('click', () => {
        $('#friend-name').remove();
        playersNum = 1;
    }); //select 1 player


    $('#start-button').on('click', () => {
        
        startGame(processNames(playersNum));

    });



});
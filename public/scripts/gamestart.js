//jshint esversion:6
$("#game-over").hide();
$("#game-stage").hide();

$(document).ready(() => {


const startGame = (numOfPlayers) => {


    function applyClickGame() {

        insertIcon(this.id);
        
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

const main = () => {

  
  
    
  
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
  
  };



    main();

});
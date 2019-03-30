//jshint esversion:6

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
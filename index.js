$(document).ready(()=>{

    var playersNum = 1; //define initial number of players
    var playerOneName;
    var playerTwoName;

    $('#game-stage').hide();

    $('#multi-player').on('click', ()=>{
        $('<input id="friend-name" class="mb-3" type="text" placeholder="Your friend\'s name" autocomplete="off">').insertAfter('#your-name');
        playersNum = 2;
    }); //select 2 players

    $('#single-player').on('click', ()=>{
        $('#friend-name').remove();
        playersNum = 1;
    }); //select 1 player

    // function of game for 2 people
    var doubleGame = ()=> {
        let moves = 0;
        let row;
        let col;
        let coordinates = [[4,4,4],[4,4,4],[4,4,4]];
        let test = [new Array(3), new Array(3), new Array(3)];
        let result = [];

        var endGame = (winner) =>{  //function to end the game
            alert(`game over! the winner is ${winner}`);
        };

        var checkResult = () =>{  //function that checks the result and verifies if there was a winner
            
            let sumRow = 0, sumCol = 0, sumDiagonLeft = 0, sumDiagonRight = 0;

            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    sumRow += coordinates[i][j];
                    sumCol += coordinates[j][i];
                    
                    if(i == j){
                        sumDiagonLeft += coordinates[i][j];
                    };

                    if((i == 0 && j == 2) || (i == 1 && j == 1) || (i == 2 && j == 0)){
                        sumDiagonRight += coordinates[i][j];
                    };
                
                };

                result.push(sumRow);
                result.push(sumCol);
                sumRow = 0;
                sumCol = 0;
            }
            
            result.push(sumDiagonLeft);
            result.push(sumDiagonRight);

            

            for(let i = 0; i < result.length; i++){
                
                if(result[i] === 3){
                    endGame(playerOneName);
                }
                else if(result[i] === 0){
                    endGame(playerTwoName);
                }
                else {
                    sumRow = 0;
                    sumCol = 0;
                    sumDiagonLeft = 0;
                    sumDiagonRight = 0;
                }
            }
            result = [];

        };

        var assignMove = (position)=>{  //function to assign 1 or 0 to a table location based on the player's move
            row = parseInt(position[position.length - 2]) - 1;
            col = parseInt(position[position.length - 1]) - 1;

            if(moves % 2 == 0){   //for player 1 add 1 to the coordinates
                coordinates[row][col] = 1;
                console.log(coordinates[row][col])
            }
            else{  //for player 2 add 0 to the coordinates
                coordinates[row][col] = 0;
                console.log(coordinates[row][col])
            }
            console.log(coordinates);

            return coordinates;
        };

        var insertMove = function(){  //function to insert the X or O in the table accordingly to the moves

            let cellId = document.getElementById(this.id);
            
            if(moves % 2 == 0){
                cellId.innerHTML = `<i class="text-white fas fa-times fa-5x m-auto text-center"></i>`;

                assignMove(this.id);

                cellId.removeAttribute('id');
            }
            else{
                cellId.innerHTML = `<i class="text-white far fa-circle fa-5x m-auto text-center"></i>`;

                assignMove(this.id);

                cellId.removeAttribute('id');
            }
            moves++;

            if(moves >= 5 && moves <= 9){  //when number of moves reaches 5, start checking if there is winner
                checkResult();
            }
        };
        
        for(let i = 1; i < 4; i++){
            for(let j = 1; j < 4; j++){
        document.getElementById(`cell-${i}${j}`).onclick = insertMove;
            }
        };



    };

    //function to start the game based on the number of players
    var startGame = (numOfPlayers) =>{

        if(numOfPlayers == 1){
        
        }
        else{
            doubleGame();
        };

    };

    $('#start-button').on('click', ()=>{
        
            if(playersNum == 2){
                playerOneName = document.getElementById('your-name').value;
                playerTwoName = document.getElementById('friend-name').value;
            }
            else{
                playerOneName = document.getElementById('your-name').value;
                playerTwoName = 'Computer';
            }
        $('#game-instructions').remove();
        $('#game-stage').show();
        $(`<h2 class="text-white">${playerOneName}</h2>`).insertAfter('#symbol-one');
        $(`<h2 class="text-white">${playerTwoName}</h2>`).insertAfter('#symbol-two');

        startGame(playersNum);
    });



});
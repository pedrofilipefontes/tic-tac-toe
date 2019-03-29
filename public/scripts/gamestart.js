//jshint esversion:6

const startGame = (numOfPlayers) => {
  let moves = 0;
  let row;
  let col;
  let coordinates = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
  ];
  let result = [];

  const checkResult = () => { //function that checks the result and verifies if there was a winner

      let sumRow = 0,
          sumCol = 0,
          sumDiagonLeft = 0,
          sumDiagonRight = 0;

      for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
              sumRow += coordinates[i][j];
              sumCol += coordinates[j][i];

              if (i == j) {
                  sumDiagonLeft += coordinates[i][j];
              }

              if ((i == 0 && j == 2) || (i == 1 && j == 1) || (i == 2 && j == 0)) {
                  sumDiagonRight += coordinates[i][j];
              }

          }

          result.push(sumRow);
          result.push(sumCol);
          sumRow = 0;
          sumCol = 0;
      }

      result.push(sumDiagonLeft);
      result.push(sumDiagonRight);



      for (let i = 0; i < result.length; i++) {

          if (result[i] === 3) {
              endGame(playerOneName);
          } else if (result[i] === -3) {
              endGame(playerTwoName);
          } else if(moves == 9){
              endGame("no one!");
          } 
          else{
              sumRow = 0;
              sumCol = 0;
              sumDiagonLeft = 0;
              sumDiagonRight = 0;
          }
      }
      result = [];

  };

  //******** end check result



  const assignMove = (position) => { //function to assign 1 or 0 to a table location based on the player's move
      row = parseInt(position[position.length - 2]) - 1;
      col = parseInt(position[position.length - 1]) - 1;

      if (moves % 2 == 0) { //for player 1 add 1 to the coordinates
          coordinates[row][col] = 1;
          console.log(coordinates[row][col])
      } else { //for player 2 add 0 to the coordinates
          coordinates[row][col] = -1;
          console.log(coordinates[row][col])
      }
      console.log(coordinates);

      return coordinates;
  };

  // ************** end assignMove

  const insertMove = function () { //function to insert the X or O in the table accordingly to the moves
      let element = document.getElementById(this.id);
      let cell = {
          currentId: element.id,
          currentMove: moves,
          assignIcon: function(){

              if(this.currentMove % 2 == 0){
                  element.innerHTML = '<i class="text-white fas fa-times fa-5x m-auto text-center"></i>';
              }
              else{
                  element.innerHTML = '<i class="text-white far fa-circle fa-5x m-auto text-center"></i>';
              }
              assignMove(this.currentId);
              element.removeAttribute("id");
          },
      };

      cell.assignIcon();

      moves++;
      
      
      if (moves >= 5 && moves <= 9) { //when number of moves reaches 5, start checking if there is winner
          checkResult();
      }
  };

  const getComputerMove = () => {
      let computerMoved = false;
      while(computerMoved == false){
          let i = Math.floor(Math.random() * 2 + 1);
          let j = Math.floor(Math.random() * 2 + 1);
      if(coordinates[i][j] == 0){
          alert('chosen' + i + j);
          computerMoved = true;
          moves++;
      }
      
      }
      computerMoved = false;

      return coordinates;
  };

  // ********************** end insertMove

  const thisTurn = () =>{  //function to determine whose turn is based on the number of players
      if(numOfPlayers == 2){
          return insertMove;
          
      }
      else if(numOfPlayers == 1){
    
          if(moves % 2 == 0){

              return insertMove;
          }
          else{
              
              getComputerMove();

          }
      }
  };



  for (let i = 1; i < 4; i++) {
      for (let j = 1; j < 4; j++) {
          document.getElementById(`cell-${i}${j}`).onclick = thisTurn();
      }
  }



};
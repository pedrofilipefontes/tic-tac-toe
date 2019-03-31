//jshint esversion:6

const computerMove = () => { //function to calculate the next computer move

  let computerMoved = false;
  let i;
  let j;

  const calculateMove = () => { //function to be called when a row has 2 elements from the oponent
    console.log('called');

    calculateResult(result);
    console.log(result);

    const checkRemaining = (xPos1, yPos1, xPos2, yPos2, xPos3, yPos3) => { //take the coordinates and check which one has a blank space to fill
      const putOnRemain = (coord1, coord2) => {
        insertIcon(`cell-${coord1}${coord2}`);
        computerMoved = true;
        result = [];
      };

      if (coordinates[xPos1 - 1][yPos1 - 1] == 0) {
        putOnRemain(xPos1, yPos1);
      } else if (coordinates[xPos2 - 1][yPos2 - 1] == 0) {
        putOnRemain(xPos2, yPos2);
      } else {
        putOnRemain(xPos3, yPos3);
      }
    };

    const bestMove = (withCase) => {
      switch (withCase) {
        case 0:
          console.log('case check');
          checkRemaining(1, 1, 1, 2, 1, 3);
          break;
        case 1:
          console.log('case check');
          checkRemaining(1, 1, 2, 1, 3, 1);
          break;
        case 2:
          console.log('case check');
          checkRemaining(2, 1, 2, 2, 2, 3);
          break;
        case 3:
          console.log('case check');
          checkRemaining(1, 2, 2, 2, 3, 2);
          break;
        case 4:
          console.log('case check');
          checkRemaining(3, 1, 3, 2, 3, 3);
          break;
        case 5:
          console.log('case check');
          checkRemaining(1, 3, 2, 3, 3, 3);
          break;
        case 6:
          console.log('case check');
          checkRemaining(1, 1, 2, 2, 3, 3);
          break;
        case 7:
          console.log('case check');
          checkRemaining(1, 3, 2, 2, 3, 1);
          break;
      }
      result = [];
    };

    const testBetterChance = (toTest) => {  //will run over the array and based on the position, it will check the best position to not let the user win
      for (let i = 0; i < result.length; i++) {
        if (result[i] == toTest && computerMoved == false) {
          console.log('if called');
          bestMove(i);
        }
      }
    };

    testBetterChance(-2);
    testBetterChance(2);

    result = [];

  };

  calculateMove();

  while (computerMoved == false && moves < 8) {
    console.log('testing');
    i = Math.floor(Math.random() * 3 + 1);
    j = Math.floor(Math.random() * 3 + 1);

    if (coordinates[i - 1][j - 1] == 0) {
      insertIcon(`cell-${i}${j}`);
      computerMoved = true;
    }
  }

};
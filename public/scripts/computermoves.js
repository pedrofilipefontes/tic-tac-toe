//jshint esversion:6

const computerMove = () => { //function to calculate the next computer move

  let computerMoved = false;
  let i;
  let j;

  const doNotWin = () => { //function to be called when a row has 2 elements from the oponent
    console.log('called');

    calculateResult(result);
    console.log(result);

    const checkRemaining = (xPos1, yPos1, xPos2, yPos2, xPos3, yPos3) => {
      if (coordinates[xPos1 - 1][yPos1 - 1] == 0) {
        insertIcon(`cell-${xPos1}${yPos1}`);
        computerMoved = true;
        result = [];
      } else if (coordinates[xPos2 - 1][yPos2 - 1] == 0) {
        insertIcon(`cell-${xPos2}${yPos2}`);
        computerMoved = true;
        result = [];
      } else {
        insertIcon(`cell-${xPos3}${yPos3}`);
        computerMoved = true;
        result = [];
      }
    };

    for (let i = 0; i < result.length; i++) { //will run over the array and based on the position, it will check the best position to not let the user win
      if (result[i] == 2 && computerMoved == false) {
        console.log('if called');
        switch (i) {
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
      }
    }

    result = [];

  };

  doNotWin();

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
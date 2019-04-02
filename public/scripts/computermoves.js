//jshint esversion:6

const computerMove = () => { //function to calculate the next computer move

    let computerMoved = false;
    let i;
    let j;

    const calculateMove = () => { //function to be called when a row has 2 elements of the same type

        calculateResult(result);

        const checkRemaining = (...posArray) => { //take the coordinates and check which one has a blank space to fill
            const putOnRemain = (coord1, coord2) => { //insert the icon in the remaining space available within the potential row
                insertIcon(`cell-${coord1}${coord2}`);
                computerMoved = true;
                result = [];
            };

            if (coordinates[posArray[0] - 1][posArray[1] - 1] == 0) { // if the coordinates position has a value of 0, then use insertIcon to fill in the proper Icon
                putOnRemain(posArray[0], posArray[1]);
            } else if (coordinates[posArray[2] - 1][posArray[3] - 1] == 0) {
                putOnRemain(posArray[2], posArray[3]);
            } else {
                putOnRemain(posArray[4], posArray[5]);
            }
        };

        const bestMove = (withCase) => {
            switch (withCase) {
            case 0:
                checkRemaining(1, 1, 1, 2, 1, 3);
                break;
            case 1:
                checkRemaining(1, 1, 2, 1, 3, 1);
                break;
            case 2:
                checkRemaining(2, 1, 2, 2, 2, 3);
                break;
            case 3:
                checkRemaining(1, 2, 2, 2, 3, 2);
                break;
            case 4:
                checkRemaining(3, 1, 3, 2, 3, 3);
                break;
            case 5:
                checkRemaining(1, 3, 2, 3, 3, 3);
                break;
            case 6:
                checkRemaining(1, 1, 2, 2, 3, 3);
                break;
            case 7:
                checkRemaining(1, 3, 2, 2, 3, 1);
                break;
            }
            result = [];
        };

        const testBetterChance = (toTest) => { //will run over the array and check the possibility to win or not let the user win in the next move
            for (let i = 0; i < result.length; i++) {
                if (result[i] == toTest && computerMoved == false) {

                    bestMove(i);
                }
            }
        };

        testBetterChance(-2);
        testBetterChance(2);

        result = [];
    };

    calculateMove();

    while (computerMoved == false && moves < 8) { //if there are no possibilities to win or not let the user win in the next move, get an available random position to fill

        i = Math.floor((Math.random() * 3) + 1);
        j = Math.floor((Math.random() * 3) + 1);

        if (coordinates[i - 1][j - 1] == 0) {
            insertIcon(`cell-${i}${j}`);
            computerMoved = true;
        }
    }

};
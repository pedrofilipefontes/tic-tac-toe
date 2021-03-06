//jshint esversion:6

let playersNum = 1; //define initial number of players
let playerOneName;
let playerTwoName;
let endCalled = false;

const processNames = (numberChosen) => { //processes the players' names into the game

    playerOneName = $('#your-name').val();

    if (numberChosen == 2) {
        playerTwoName = $('#friend-name').val();
    } else {
        playerTwoName = 'Computer';
    }
    $('#game-instructions').remove();
    $("#game-stage").removeAttr("hidden");

    $(`<h2 class="text-white">${playerOneName}</h2>`).insertAfter('#symbol-one');
    $(`<h2 class="text-white">${playerTwoName}</h2>`).insertAfter('#symbol-two');

    return numberChosen;
};

let moves = 0;
let row;
let col;
let coordinates = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let result = [];

const calculateResult = (resultArray) => { //function to calculate the array with sum of rows

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

        resultArray.push(sumRow);
        resultArray.push(sumCol);
        sumRow = 0;
        sumCol = 0;
    }

    resultArray.push(sumDiagonLeft);
    resultArray.push(sumDiagonRight);

    return resultArray;
};

const endGame = (winner) => { //function to end the game

    endCalled = true;
    setTimeout(() => {
        $("#game-stage").hide();

        $("#game-over").removeAttr("hidden");

        $("#winner-name").text(winner);

    }, 300);

};

const checkResult = () => { //function that checks the result array and verifies if there was a winner

    calculateResult(result);

    for (let i = 0; i < result.length; i++) {

        if (result[i] === 3) {
            endGame(playerOneName);
        } else if (result[i] === -3 || (result[i] == -3 && moves == 9)) {
            endGame(playerTwoName);
        } else if (moves == 9) {
            endGame("no one! Play again.");
        } else {
            sumRow = 0;
            sumCol = 0;
            sumDiagonLeft = 0;
            sumDiagonRight = 0;
        }
    }
    result = [];

};




const assignMove = (position) => { //function to assign 1 or -1 to a table location based on the player's move
    row = parseInt(position[position.length - 2]) - 1;
    col = parseInt(position[position.length - 1]) - 1;

    if (moves % 2 == 0) { //for player 1 add 1 to the coordinates
        coordinates[row][col] = 1;

    } else { //for player 2 add -1 to the coordinates
        coordinates[row][col] = -1;

    }
    return coordinates;
};



const insertIcon = (iconPosition) => { //function to create an icon in the given position according to the move
    let element = document.getElementById(iconPosition);

    if (moves % 2 == 0) {
        element.innerHTML = '<i class="text-white fas fa-times fa-5x m-auto text-center"></i>';
    } else {
        element.innerHTML = '<i class="text-white far fa-circle fa-5x m-auto text-center"></i>';
    }
    assignMove(element.id);
    element.removeAttribute("id");
    moves++;

    if (moves >= 5 && moves <= 9) { //when number of moves reaches 5, start checking if there is winner
        checkResult();
    }
};


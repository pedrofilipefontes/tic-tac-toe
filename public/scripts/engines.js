//jshint esversion:6

const processNames = (numberChosen) => {

  playerOneName = document.getElementById('your-name').value;

  if (numberChosen == 2) {
      playerTwoName = document.getElementById('friend-name').value;
  } else {
      playerTwoName = 'Computer';
  }
  $('#game-instructions').remove();
  $('#game-stage').show();

  $(`<h2 class="text-white">${playerOneName}</h2>`).insertAfter('#symbol-one');
  $(`<h2 class="text-white">${playerTwoName}</h2>`).insertAfter('#symbol-two');
  
  return numberChosen;
};





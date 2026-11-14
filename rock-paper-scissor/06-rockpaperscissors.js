let computerMove = '';
    let result = '';

    let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updateScore();

    function pickComputerMove() {

      const randomNumber = Math.random();

      if (randomNumber < 1/3) {
        computerMove = 'rock';
      }
      else if (randomNumber < 2/3) {
        computerMove = 'paper';
      }
      else {
        computerMove = 'scissors';
      }

    }

    function playGame(variable) {

      pickComputerMove();

      if (computerMove === variable) {
        result = 'Tie';
      }

      else if (
        (variable === 'rock' && computerMove === 'scissors') ||
        (variable === 'paper' && computerMove === 'rock') ||
        (variable === 'scissors' && computerMove === 'paper')
      ) {
        result = 'You Win';
      }

      else {
        result = 'You Lose';
      }

      if (result === 'You Win') {
        score.wins++;
      }
      else if (result === 'You Lose') {
        score.losses++;
      }
      else {
        score.ties++;
      }

      localStorage.setItem('score', JSON.stringify(score));

      // Update result
      document.querySelector('.js-result').innerHTML = result;

      // Update player and computer moves
      document.querySelector('.js-move').innerHTML =
        `You
          <img src="images/${variable}-emoji.png">
          <img src="images/${computerMove}-emoji.png">
          computer`;

      updateScore();

    }

    function updateScore() {

      document.querySelector('.js-score').innerHTML =
        `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

    }

    function ResetScore() {

      score = {
        wins: 0,
        losses: 0,
        ties: 0
      };

      localStorage.removeItem('score');

      document.querySelector('.js-result').innerHTML = '';
      document.querySelector('.js-move').innerHTML = '';

      updateScore();

    }
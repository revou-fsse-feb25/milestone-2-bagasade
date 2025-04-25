let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 5;

const input = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const message = document.querySelector('.message');
const attemptsText = document.getElementById('attempts');
const restartBtn = document.getElementById('restart-btn');

submitBtn.addEventListener('click', () => {
  const userGuess = parseInt(input.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  if (userGuess === randomNumber) {
    message.textContent = '🎉 Correct! You win!';
    endGame();
  } else {
    attemptsLeft--;
    attemptsText.textContent = attemptsLeft;

    if (attemptsLeft === 0) {
      message.textContent = `😢 Game Over! The number was ${randomNumber}.`;
      endGame();
    } else {
      message.textContent = userGuess > randomNumber ? '📉 Too High!' : '📈 Too Low!';
    }
  }

  input.value = '';
});

function endGame() {
  input.disabled = true;
  submitBtn.disabled = true;
  restartBtn.style.display = 'inline-block';
}

restartBtn.addEventListener('click', () => {
  // Reset everything
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 5;
  input.disabled = false;
  submitBtn.disabled = false;
  input.value = '';
  message.textContent = '';
  attemptsText.textContent = attemptsLeft;
  restartBtn.style.display = 'none';
});

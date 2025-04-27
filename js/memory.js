// Simbol unik (2x masing-masing)
const symbols = ['🍎', '🍌', '🍇', '🍓', '🍍', '🥝', '🍉', '🍒'];
let cards = [...symbols, ...symbols]; // Duplikat jadi pasangan

// Acak kartu
cards = cards.sort(() => 0.5 - Math.random());

// Variabel untuk logika permainan
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Tampilkan kartu di game board
const board = document.querySelector('.game-board');

cards.forEach(symbol => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.symbol = symbol;
  card.textContent = ''; // Awalnya kosong
  board.appendChild(card);

  card.addEventListener('click', () => {
    if (lockBoard || card === firstCard || card.classList.contains('matched')) return;

    card.textContent = symbol;
    card.classList.add('flipped');

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      lockBoard = true;

      // Cek kecocokan
      if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        resetTurn();
      } else {
        setTimeout(() => {
          firstCard.textContent = '';
          secondCard.textContent = '';
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
          resetTurn();
        }, 1000);
      }
    }
  });
});


function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function cellClicked(index) {
  if (gameActive && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    checkResult();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkResult() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      document.getElementById('message').innerText = `${board[a]} wins!`;
      highlightWinningCells(a, b, c);
      return;
    }
  }
  if (!board.includes('')) {
    gameActive = false;
    document.getElementById('message').innerText = `It's a draw!`;
  }
}

function highlightWinningCells(a, b, c) {
  document.getElementsByClassName('cell')[a].style.backgroundColor = '#8bc34a';
  document.getElementsByClassName('cell')[b].style.backgroundColor = '#8bc34a';
  document.getElementsByClassName('cell')[c].style.backgroundColor = '#8bc34a';
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('message').innerText = '';
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
    cells[i].style.backgroundColor = '#ddd';
  }
}

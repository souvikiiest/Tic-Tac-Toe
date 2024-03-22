import { useState } from "react"
import Square from "./Square.jsx"
export default function Board({ square, onPlay, isXNext, player1, player2 }) {
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = winner == "X" ? `Winner: ${player1.toUpperCase()}` : `Winner: ${player2.toUpperCase()}`;

  }
  else if (square.every((item) => item != null)) {
    status = "Oh! It's a draw";
  }
  else {

    status = "Next Player: " + (isXNext ? player1.toUpperCase() + " (X)" : player2.toUpperCase() + " (O)");
  }

  function squareClick(i) {
    if (square[i] || calculateWinner(square))
      return;
    const newSquare = square.slice();
    newSquare[i] = isXNext ? "X" : "O";
    onPlay(newSquare);
  }

  return (<>
    <div className="text-center text-lg m-2 font-semibold text-green-700">{status}</div>
    <div className="flex">
      <Square value={square[0]} onSquareClick={() => squareClick(0)} />
      <Square value={square[1]} onSquareClick={() => squareClick(1)} />
      <Square value={square[2]} onSquareClick={() => squareClick(2)} />
    </div>
    <div className="flex">
      <Square value={square[3]} onSquareClick={() => squareClick(3)} />
      <Square value={square[4]} onSquareClick={() => squareClick(4)} />
      <Square value={square[5]} onSquareClick={() => squareClick(5)} />
    </div>
    <div className="flex">
      <Square value={square[6]} onSquareClick={() => squareClick(6)} />
      <Square value={square[7]} onSquareClick={() => squareClick(7)} />
      <Square value={square[8]} onSquareClick={() => squareClick(8)} />
    </div>

  </>
  )
}
//Function to calcualte winner, returns null if no winner and returns X or O for winner.
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

import { useState } from "react";
import Board from "./Board";




export default function Game({ player1, player2 }) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isXNext, setXNext] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSquare = history[currentIndex];
  function handleClick(newSquare) {
    setXNext(!isXNext);
    const nextHistory = [...history.slice(0, currentIndex + 1), newSquare];
    setHistory(nextHistory);
    setCurrentIndex(nextHistory.length - 1);
  }
  function goBack(index) {
    setCurrentIndex(index);
    setXNext(index % 2 == 0 ? true : false);
  }
  function Reset() {
    setHistory([Array(9).fill(null)]);
    setXNext(true);
    setCurrentIndex(0);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-300 rounded-xl p-5 flex flex-col items-center">
        <div>
          <Board player1={player1} player2={player2} square={currentSquare} isXNext={isXNext} onPlay={handleClick} />
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1.5, px-2 m-2 rounded" onClick={Reset}>
            Reset Game
          </button>
        </div>
      </div>
      <div className="ml-4 bg-slate-500 p-5 rounded-xl">
        <ol>
          {history.map((_, index) => (index == 0 ? "Start the game" : <li key={index} className="text-white">
            Go back to{" "}
            <button
              className=" text-yellow-200"
              onClick={() => goBack(index)}
            >
              #{index}
            </button>
          </li>
          ))}
        </ol>
      </div>
    </div>)
}

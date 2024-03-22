import { useState } from "react"
import Game from "../components/Game.jsx"
export default function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [hasGameStarted, setGameStarter] = useState(false);
  function handleStartGame() {
    if (player1 && player2) {
      setGameStarter(true);
    }
    else {
      alert('Please enter both players name');
    }
  }



  return (<>
    {!hasGameStarted ? (
      <div className="flex flex-col items-center justify-center h-screen bg-slate-300">
        <h2 className="m-3">Enter the following details</h2>
        <input className="mb-2 px-2 py-1 border rounded w-auto" placeholder="Enter first player name..." onChange={(e) => setPlayer1(e.target.value)} />
        <input className="mb-2 px-2 py-1 border rounded w-auto" placeholder="Enter second player name..." onChange={(e) => setPlayer2(e.target.value)} />
        <button className="rounded bg-blue-500 text-white p-1" onClick={handleStartGame}>Start Game</button>

      </div>
    ) : <Game player1={player1} player2={player2} />}
  </>)

}


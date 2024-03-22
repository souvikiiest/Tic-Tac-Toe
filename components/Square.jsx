import React from "react"
export default function Square({ value, onSquareClick }) {
  return <button onClick={onSquareClick} className="bg-white border-2 rounded border-stone-900 h-10 w-10 text-lg m-1">{value}</button>
}

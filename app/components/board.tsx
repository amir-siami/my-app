"use client";

import { useState } from "react";
import Square from "./square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleGameChange(i: number) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onChangeSquare={() => handleGameChange(0)} />
        <Square value={squares[1]} onChangeSquare={() => handleGameChange(1)} />
        <Square value={squares[2]} onChangeSquare={() => handleGameChange(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onChangeSquare={() => handleGameChange(3)} />
        <Square value={squares[4]} onChangeSquare={() => handleGameChange(4)} />
        <Square value={squares[5]} onChangeSquare={() => handleGameChange(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onChangeSquare={() => handleGameChange(6)} />
        <Square value={squares[7]} onChangeSquare={() => handleGameChange(7)} />
        <Square value={squares[8]} onChangeSquare={() => handleGameChange(8)} />
      </div>
    </>
  );
}

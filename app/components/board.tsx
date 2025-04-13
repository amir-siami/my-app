"use client";

import Square from "./square";
import { calculateWinner } from "../lib/calculate-winner";

export default function Board({
  xIsNext,
  squares,
  onPlay,
}: {
  xIsNext: boolean;
  squares: Array<string | null>;
  onPlay: (nextSquares: Array<string | null>) => void;
}) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onChangeSquare={() => handleClick(0)} />
        <Square value={squares[1]} onChangeSquare={() => handleClick(1)} />
        <Square value={squares[2]} onChangeSquare={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onChangeSquare={() => handleClick(3)} />
        <Square value={squares[4]} onChangeSquare={() => handleClick(4)} />
        <Square value={squares[5]} onChangeSquare={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onChangeSquare={() => handleClick(6)} />
        <Square value={squares[7]} onChangeSquare={() => handleClick(7)} />
        <Square value={squares[8]} onChangeSquare={() => handleClick(8)} />
      </div>
    </>
  );
}

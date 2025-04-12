"use client";

export default function Square({
  value,
  onChangeSquare,
}: {
  value: number;
  onChangeSquare: () => void;
}) {
  return (
    <button className="square" onClick={onChangeSquare}>
      {value}
    </button>
  );
}

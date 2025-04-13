"use client";

export default function Square({
  value,
  onChangeSquare,
}: {
  value: string | null;
  onChangeSquare: () => void;
}) {
  return (
    <button className="square" onClick={onChangeSquare}>
      {value}
    </button>
  );
}

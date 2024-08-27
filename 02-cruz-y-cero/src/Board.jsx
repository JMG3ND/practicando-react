import { useState } from "react";
import "./styles.css";
import Square from "./Square";
import Modal from "./Modal";
import { checkWin, turns } from "./useValues";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(turns.X);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (index) => {
    if (squares[index] != null) return;

    const newSquare = squares.slice();
    newSquare[index] = turn;
    setSquares(newSquare);
    if (checkWin(newSquare)) {
      setShowModal(true);
      return;
    }
    setTurn(turn === turns.X ? turns.O : turns.X);
  };
  const okClick = () => {
    setSquares(Array(9).fill(null));
    setTurn(turns.X);
    setShowModal(false);
  };

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <h2 className="board-turn">Turno: {turn}</h2>
      {showModal && <Modal winer={turn} onOkClick={okClick} />}
    </>
  );
}

import React, { useState } from "react";
import { checkWinner } from "../Logic";
import Board from "./Board";

const styles = {
  width: "200px",
  margin: "20px auto"
};

const pStyle = {
  color: "green"
};

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = checkWinner(Board);

  const handleClick = (i) => {
    const boardState = [...board];
    // if user clicks on occupied box or if game is won, then return
    if (winner || boardState[i]) return;
    // put an x or O in the clicked box
    boardState[i] = xIsNext ? "X" : "O";
    setBoard(boardState);
    setXisNext(!xIsNext);
  };

  return (
    <React.Fragment>
      <Board boxes={board} onClick={handleClick} />
      <div style={styles}>
        <p style={pStyle}>
          {winner
            ? "Winner is " + winner
            : "Next Player " + (xIsNext ? "X" : "O")}
        </p>
      </div>
    </React.Fragment>
  );
}

export default Game;
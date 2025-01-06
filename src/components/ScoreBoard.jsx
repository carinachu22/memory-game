import React from "react";

function ScoreBoard({ score, bestScore }) {
  return (
    <div>
      <p>Score: {score}</p>
      <p>Best score: {bestScore}</p>
    </div>
  );
}

export default ScoreBoard;

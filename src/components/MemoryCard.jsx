import React from "react";
import "./MemoryCard.css";
function MemoryCard({ name, picture, onClick }) {
  return (
    <div className="memory-card" onClick={onClick}>
      <img className="image" src={picture} alt="Memory Card Image" />
      <p>{name}</p>
    </div>
  );
}

export default MemoryCard;

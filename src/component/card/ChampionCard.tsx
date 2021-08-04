import React from "react";
import "./ChampionCard.css";

function ChampionCard() {
  return (
    <div className="card">
      <div className="card__content">
        <h2 className="card__year">2005</h2>
        <p className="card__drivername">Louis Hamilton</p>
        <p className="card__teamname">Renault</p>
      </div>
    </div>
  );
}

export default ChampionCard;

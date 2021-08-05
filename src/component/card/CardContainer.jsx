import React from "react";
import ChampionCard from "./ChampionCard";
import "./CardContainer.css";

function CardContainer() {
  const years = new Array(16).fill(1).map((_, i) => i + 2005);
  return (
    <div className="card__container">
        <ChampionCard years={years} />
    </div>
  );
}

export default CardContainer;

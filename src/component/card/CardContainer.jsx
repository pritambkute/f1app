import React from "react";
import ChampionCard from "./ChampionCard";
import "./CardContainer.css";

function CardContainer() {
  return (
    <div className="card__container">
      <ChampionCard />
      <ChampionCard />
      <ChampionCard />
      <ChampionCard />
      <ChampionCard />
    </div>
  );
}

export default CardContainer;

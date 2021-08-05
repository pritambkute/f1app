import React from "react";
import "./ChampionCard.css";

interface Props {
  years: [];
}

function ChampionCard(props: Props) {
  const years = props.years;
  return (
    <>
      {years.map((year: number, index: number) => {
        return (
          <div className="card" key={index}>
            <div className="card__content">
              <h2 className="card__year">{year}</h2>
              <p className="card__drivername">Louis Hamilton</p>
              <p className="card__teamname">Renault</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ChampionCard;

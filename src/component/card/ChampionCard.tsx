import React from "react";
import "./ChampionCard.css";

interface ChampionData {
  championData: [];
}

function ChampionCard(props: ChampionData) {
  const { championData } = props;
  return (
    <>
      {championData && championData.map(({season, driverId, driverName, team}, index) => {
        return (
          <div className="card" key={index}>
            <div className="card__content">
              <h2 className="card__year">{season}</h2>
              <p className="card__drivername">{driverName}</p>
              <p className="card__teamname">{team}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ChampionCard;

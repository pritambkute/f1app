import React, { useEffect, useState } from "react";
import ChampionCard from "./ChampionCard";
import "./CardContainer.css";
import CarLoader from "../loader/CarLoader";

function CardContainer() {
  const [champData, setChampData] = useState(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setBusy(true);
    var championDataList = [];
    async function fetchChampions() {
      const URL = "http://ergast.com/api/f1/driverStandings/1.json?limit=72";

      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const response = await fetch(URL, requestOptions);
      const data = JSON.parse(await response.text());
      const standingList = data.MRData.StandingsTable.StandingsLists;
      const filteredStadingList = standingList.filter(element => element.season > 2004);

      filteredStadingList.forEach(champion => {
        let championData = {};
        championData.season = champion.season;
        championData.driverId = champion.DriverStandings[0].Driver.driverId;
        championData.driverName = champion.DriverStandings[0].Driver.givenName + " " + champion.DriverStandings[0].Driver.familyName;
        championData.team = champion.DriverStandings[0].Constructors[0].name;
        championDataList.push(championData);
      })

      setChampData(championDataList);
      setBusy(false);
    }

    fetchChampions();
  }, []);

  return (
    <div className="card__container">
      {busy ? <CarLoader /> : <ChampionCard championData={champData} />}
      {/* <ChampionCard years={years} /> */}
    </div>
  );
}

export default CardContainer;

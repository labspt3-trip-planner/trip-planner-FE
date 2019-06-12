import React from "react";
import HeaderContainer from "../HeaderComponents/HeaderContainer";
import MapDisplay from "../Map/MapDisplay";
import "../TripComponents/Page.css";
import CheckListContainer from "./CheckListComponents/CheckListContainer";
import Title from "./TripName";

const TripInfoContainer = () => {
  return (
    <div className="page-container">
      <HeaderContainer />
      <Title />
      <br />
      <CheckListContainer />
      <MapDisplay />
    </div>
  );
};

export default TripInfoContainer;

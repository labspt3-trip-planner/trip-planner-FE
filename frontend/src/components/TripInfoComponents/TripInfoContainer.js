import React from "react";
import HeaderContainer from "../HeaderComponents/HeaderContainer";
import "../TripComponents/Page.css";
import CheckListContainer from "./CheckListComponents/CheckListContainer";
import Title from "./TripName";
import GMap from "../Map/GMap";

const TripInfoContainer = () => {
  return (
    <div className="page-container">
      <HeaderContainer />
      <Title />
      <br />
      <CheckListContainer />
      <div className="map-container">
        <GMap isMarkerShown />
      </div>
    </div>
  );
};

export default TripInfoContainer;

import React from "react";
import "../TripComponents/Page.css";
// import DateInput from "../ModalComponents/DateInput";

const TripTitle = props => {
  return (
    <div className="trip-list-top">
      <h1 className="space">{props.tripName}</h1>
    </div>
  );
};

export default TripTitle;

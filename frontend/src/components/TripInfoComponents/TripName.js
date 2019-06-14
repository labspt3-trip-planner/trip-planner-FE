<<<<<<< HEAD
import React from 'react';
import '../TripComponents/Page.css';
// import DateInput from "../ModalComponents/DateInput";
=======
import React from "react";
import "../TripComponents/Page.css";
import DateInput from "../ModalComponents/DateInput";
>>>>>>> 43bf036780c713cc7bb608d106d8776f8201d179

const TripTitle = props => {
  return (
    <div className="trip-list-top">
      <h1 className="space">{props.tripName}</h1>
    </div>
  );
};

export default TripTitle;

import React, { useState } from 'react';
import HeaderContainer from "../HeaderComponents/HeaderContainer"
import Trip from "./Trip";
import TripForm from "./TripForm";
import './TripList.css';

function TripList() {
// trips = state, setTrips = change state 
  const [trips, setTrips] = useState([ 
    {
      name: 'Honeymoon',
      destination: 'Maui HI',
      start: '12/13/19',
      end: '12/20/19'
    },
    {
      name: 'Girls Trip',
      destination: 'Las Vegas Tahoe',
      start: '2/3/20',
      end: '2/10/20'
    },
    {
      name: 'Spring Break',
      destination: 'Cancun Cozumel',
      start: '4/14',
      end: '4/21'
    }
  ]);

  const addTrip = name => {
    const newTrips = [...trips, {name}]; // use the spread operator to copy things already there + add text
    setTrips(newTrips);
  };

  const deleteTrip = index => {
    const newTrips = [...trips];
    newTrips.splice(index, 1);
    setTrips(newTrips);
  }
  
  return (
    <div className="trip-list-container">
      <HeaderContainer />
      <h1>•  Trip Planner  •</h1>
      <div className="trip-list">
        <div className="trip-labels">
          <p>Name</p>
          <p>Destination</p>
          <p>Start</p>
          <p>End</p>
        </div>
        {trips.map((trips, index) => (
          <Trip key={index} index={index} trip={trips} deleteTrip={deleteTrip}/>
        ))}
        <TripForm addTrip={addTrip}/>
      </div>
    </div>
  );
}
export default TripList;

//export default authenticate(App)(Login);
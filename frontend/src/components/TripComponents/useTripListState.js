import { useState } from 'react';

export default initialValue => {
    const [trips, setTrips] = useState(initialValue);

    return {
        trips,
        newTrips: tripList => {
            setTrips([...trips, {name}]); // use the spread operator to copy things already there + add text
        },
        deleteTrip: index => {
            const newTrips = [...trips];
            newTrips.splice(index, 1);
            setTrips(newTrips);
          }
    };
};
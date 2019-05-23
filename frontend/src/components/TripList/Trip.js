import React from "react";

// trip component - will be in a table form later
function Trip({ trip }) {
    return (
        <div className="trip">
            <p>{trip.name}</p> 
            <p>{trip.destination}</p>
            <p>{trip.start}</p>
            <p>{trip.end}</p>

        </div>
    );
}

export default Trip;
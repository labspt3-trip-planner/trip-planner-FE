import React from "react";

// trip component - will be in a table form later
function Trip({ trip, index,deleteTrip }) {
    return (
        <div className="trip">
            {trip.name} 
            <div>
                <button onClick={() => deleteTrip(index)}>Delete</button>
            </div>
        </div>
    );
}

export default Trip;
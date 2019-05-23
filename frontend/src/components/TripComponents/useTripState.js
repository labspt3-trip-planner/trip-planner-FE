import { useState } from 'react';

export default initialValue => {
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

    return {
        trips,
        onChange: event => {
            setValue(event.target.trips);
        },
        reset: () => setTrips('')
    };
};
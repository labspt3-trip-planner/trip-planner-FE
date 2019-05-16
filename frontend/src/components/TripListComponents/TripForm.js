import React, { useState } from 'react';

function TripForm({ addTrip }){
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault(); // want to make sure we prevent default action
        if(!value) return; // we dont wanna submit blanks
        addTrip(value);
        setValue(''); // clear the form out
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="input" 
                placeholder="Add a trip..."
                value={value} 
                onChange={e => setValue(e.target.value)} 
            />
        </form>
    )
}



export default TripForm;

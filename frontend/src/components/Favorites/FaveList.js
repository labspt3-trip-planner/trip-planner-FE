import React from "react";
import "./FaveList.css";

export default function FaveList(props) {
  return (
    <div className="list-wrapper">
      <ul id="favorites-list">
        {props.favorites.map(fave => {
          return (
            <li key={fave.place_id}>
              <div className="fave-header">
                <h3>{fave.name}</h3>
              </div>
              <div className="address-wrapper">
                <a href={fave.url}>{fave.formatted_address}</a>
              </div>
              <div className="phone-wrapper">
                <a href={`tel:${fave.formatted_phone_number}`}>
                  {fave.formatted_phone_number}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

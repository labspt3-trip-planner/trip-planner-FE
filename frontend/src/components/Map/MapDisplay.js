import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function MapDisplay() {
  const [viewport, setViewport] = useState({
    latitude: 30.332184,
    longitude: -81.655647,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });

  return (
    <div className="map-wrapper">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={accessToken}
        mapStyle={"mapbox://styles/krampasyullog/cjwsjh9xt1bs21cmjulzfndrv"}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      />
    </div>
  );
}

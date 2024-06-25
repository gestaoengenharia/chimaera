import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import Map from "react-map-gl";
import { useApp } from "../providers/AppProvider";

export default function MapComponent() {
  const { mapRef } = useApp();
  const [viewState, setViewState] = useState({
    longitude: -42.90748652643276,
    latitude: -20.40436261357887,
    zoom: 11.181550333109245,
    pitch: 0,
    bearing: 0,
    padding: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });

  return (
    <Map
      reuseMaps
      {...viewState}
      ref={mapRef}
      onMove={(evt) => setViewState(evt.viewState)}
      mapboxAccessToken="pk.eyJ1IjoicGFzY2hlbmRhbGUiLCJhIjoiY2x4bG1haThnMDFrMDJrcHpnbThqOGd2diJ9.S9-iSawymgjbPoxSc7gWtg"
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/paschendale/clxlmdqkh020k01qm8vsvexzm"
    />
  );
}

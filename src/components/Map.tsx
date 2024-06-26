import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState } from "react";
import MapGL from "react-map-gl/maplibre";
import { mapstyle } from "../mapstyle";
import { useApp } from "../providers/AppProvider";

export default function Map() {
  const { mapRef } = useApp();
  const [viewState, setViewState] = useState({
    longitude: -62.648736376081786,
    latitude: -25.63613760812686,
    zoom: 2.6090850674385604,
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
    <MapGL
      {...viewState}
      ref={mapRef}
      mapLib={maplibregl}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100%", height: "100%" }}
      mapStyle={mapstyle as any}
    />
  );
}

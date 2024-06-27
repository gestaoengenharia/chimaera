import { keyframes } from "@chakra-ui/react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import Map, { Layer, Source } from "react-map-gl";
import { setoresCensitarios } from "../assets/setores_censitarios";
import { useApp } from "../providers/AppProvider";
import { theme } from "../theme";

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

  function getColorStops() {
    return [
      [0, theme.colors.brand["green100"]],
      [30, theme.colors.brand["green200"]],
      [60, theme.colors.brand["green300"]],
      [90, theme.colors.brand["green400"]],
      [120, theme.colors.brand["green500"]],
      [150, theme.colors.brand["green600"]],
      [180, theme.colors.brand["green700"]],
      [210, theme.colors.brand["green800"]],
      [240, theme.colors.brand["green900"]],
      [270, theme.colors.brand["green900"]],
      [300, theme.colors.brand["green900"]],
    ];
  }

  const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `;

  return (
    <Map
      reuseMaps
      {...viewState}
      attributionControl={false}
      ref={mapRef}
      onMove={(evt) => setViewState(evt.viewState)}
      mapboxAccessToken="pk.eyJ1IjoicGFzY2hlbmRhbGUiLCJhIjoiY2x4bG1haThnMDFrMDJrcHpnbThqOGd2diJ9.S9-iSawymgjbPoxSc7gWtg"
      style={{
        width: "100%",
        height: "100%",
        animation: `${fadeIn} 0.3s ease-in`,
      }}
      mapStyle="mapbox://styles/paschendale/clxlmdqkh020k01qm8vsvexzm"
    >
      <Source id="setores" type="geojson" data={setoresCensitarios as any}>
        <Layer
          {...{
            id: "setores-fill",
            type: "fill",
            source: "setores", // reference the data source
            layout: {},
            paint: {
              "fill-color": [
                "interpolate",
                ["linear"],
                ["get", "casos"],
                ...getColorStops().flat(),
              ],
              "fill-opacity": 0.8,
              "fill-opacity-transition": { duration: 500 },
              "fill-outline-color": theme.colors.brand["lightgreen"],
            },
          }}
        ></Layer>
      </Source>
    </Map>
  );
}

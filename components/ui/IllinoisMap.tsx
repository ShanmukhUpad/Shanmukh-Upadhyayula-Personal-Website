"use client";

import Map, { Marker, NavigationControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const PINS = [
  { city: "Chicago", lat: 41.870172029691815, lon: -87.64921432584315 },
  { city: "Naperville", lat: 41.70809463875043, lon: -88.20065314430416 },
  { city: "Urbana", lat: 40.11374958520935, lon: -88.22493172575905 },
];

export default function IllinoisMap() {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  return (
    <div style={{ height: 280, width: "100%" }}>
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          bounds: [[-91.513, 36.970], [-87.495, 42.508]],
          fitBoundsOptions: { padding: 16 },
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        scrollZoom={true}
        attributionControl={false}
        logoPosition="top-right"
      >
        <NavigationControl position="bottom-right" showCompass={false} />
        {PINS.map(({ city, lat, lon }) => (
          <Marker key={city} latitude={lat} longitude={lon} anchor="bottom">
            <div className="flex flex-col items-center">
              <span
                className="text-[9px] font-mono px-1 rounded mb-0.5"
                style={{
                  color: "var(--color-neon)",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  whiteSpace: "nowrap",
                }}
              >
                {city}
              </span>
              <div
                className="rounded-full"
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: "var(--color-neon)",
                  boxShadow: "0 0 6px var(--color-neon)",
                }}
              />
            </div>
          </Marker>
        ))}
      </Map>
    </div>
  );
}

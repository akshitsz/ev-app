import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

// Default location (India)
const defaultCenter = { lat: 20.5937, lng: 78.9629 };

const ChargingStation = () => {
  const [chargingStations, setChargingStations] = useState([]);
  const [location, setLocation] = useState(defaultCenter);

  // Get user location (if allowed)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error("Geolocation error:", error),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  // Fetch EV Charging Stations from OpenChargeMap API
  useEffect(() => {
    const fetchChargingStations = async () => {
      try {
        const response = await axios.get(
          `https://api.openchargemap.io/v3/poi/?output=json&latitude=${location.lat}&longitude=${location.lng}&distance=10&distanceunit=KM&maxresults=10&key=YOUR_OPENCHARGEMAP_API_KEY`
        );
        setChargingStations(response.data);
      } catch (error) {
        console.error("Error fetching charging stations:", error);
      }
    };

    fetchChargingStations();
  }, [location]); // Runs whenever location changes

  return (
    <div>
      <h2>Find Nearby EV Charging Stations 🔋</h2>

      {/* Leaflet Map */}
      <MapContainer center={location} zoom={12} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap Tile
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Add Markers for Charging Stations */}
        {chargingStations.map((station, index) => (
          <Marker
            key={index}
            position={{
              lat: station.AddressInfo.Latitude,
              lng: station.AddressInfo.Longitude,
            }}
          >
            <Popup>
              <strong>{station.AddressInfo.Title}</strong> <br />
              {station.AddressInfo.AddressLine1}, {station.AddressInfo.Town}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Charging Station List */}
      <h3>Available Charging Stations</h3>
      <ul>
        {chargingStations.length > 0 ? (
          chargingStations.map((station, index) => (
            <li key={index}>
              <strong>{station.AddressInfo.Title}</strong> - {station.AddressInfo.AddressLine1}, {station.AddressInfo.Town}
            </li>
          ))
        ) : (
          <p>No charging stations found in this area.</p>
        )}
      </ul>
    </div>
  );
};

export default ChargingStation;

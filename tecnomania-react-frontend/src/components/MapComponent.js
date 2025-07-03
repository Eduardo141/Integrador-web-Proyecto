// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Icono para los marcadores
const redIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon-2x.png'), // Cambia esto si es necesario
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'), // Cambia esto si es necesario
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = () => {
  // Coordenadas de los locales (ejemplo)
  const locations = [
    { lat: -12.09, lng: -77, name: 'Local 1' },
    { lat: -11.99, lng: -77.03, name: 'Local 2' },
    { lat: -12.04, lng: -77.03, name: 'Local 3' },
  ];

  return (
    <MapContainer center={[-9.19, -75.0152]} zoom={5} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]} icon={redIcon}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;

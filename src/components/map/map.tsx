import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import marker from '../../assets/icons/marker.svg'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const customIcon = new L.Icon({
  iconUrl: marker,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const CustomMap = () => {
  return (
    <div style={{ height: "400px", width: "100%", borderRadius: "12px", overflow: "hidden" }}>
      <MapContainer
        center={[48.3794, 31.1656]}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[50.4501, 30.5234]} icon={customIcon}>
          <Popup>Київ — тут твоя позначка ✨</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export { CustomMap }

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const position: L.LatLngExpression = [-6.6136875, 110.7269375];

export default function LiveMap() {
    return (
        <MapContainer
            center={position}
            zoom={17}
            scrollWheelZoom={false}
            style={{ height: "200px", width: "100%", borderRadius: "12px" }}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                Lokasi Acara Wedding
                </Popup>
            </Marker>
        </MapContainer>
    );
}
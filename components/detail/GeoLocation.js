
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import useGetCountryLatLng from "@/hooks/useGetCountryLatLng";
import { useMemo } from "react";

const GeoLocation = ({ location, zoom, height }) => {
  const latlng = useGetCountryLatLng(location);
  const position = useMemo(() => {
    if (latlng) {
      return {
        lat: parseFloat(latlng.split(",")[0]),
        lon: parseFloat(latlng.split(",")[1]),
      };
    } else {
      return {
        lat: 20,
        lon: 90,
      };
    }
  }, [latlng]);

  const key = `${position?.lat}-${position?.lon}`;

  return (
    <MapContainer
      key={key}
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: height }}
      className="w-full rounded overflow-hidden"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[position?.lat, position?.lon]}>
        <Popup>You found it!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default GeoLocation;

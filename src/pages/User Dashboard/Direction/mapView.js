import React from "react";
import "./direction.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";

function MapView() {
    const position = [47.003758, -123.473480];

    return (
        <div className="row mapStyle" id="mapid">
            <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        I am pointing <br /> Satsop Bulb Farm.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default MapView
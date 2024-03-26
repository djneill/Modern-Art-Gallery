'use client'

import L from 'leaflet'
import MarkerIcon from 'leaflet/dist/images/marker-icon.png'
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react'
import dynamic from 'next/dynamic';
import HomeButton from '../HomeButton'


export default function Map() {

    const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
        ssr: false, // This ensures the component is only rendered on the client side
    });

    const [coord, setCoord] = useState<[number, number]>([41.490578, -71.310196])

    return (
        <div className='grid'>
            <div className="col-start-1 row-start-1 relative top-2 left-12 z-40">
                <HomeButton />
            </div>
            <MapContainer style={{
                height: '80vh',
                width: '100vw'
            }} center={coord} zoom={18} scrollWheelZoom={false} className='col-start-1 row-start-1 z-30'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                } position={[41.490578, -71.310196]}>
                    <Popup>
                        Modern Art Gallery
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
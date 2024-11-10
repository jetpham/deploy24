'use client'
import React from 'react';
import { APIProvider, Map} from '@vis.gl/react-google-maps';

const GoogleMapComponent = () => {
    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
            <Map
                style={{ width: '100vw', height: '100vh' }}
                defaultCenter={{ lat: 22.54992, lng: 0 }}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            >

            </Map>
        </APIProvider>
    );
};

export default GoogleMapComponent;
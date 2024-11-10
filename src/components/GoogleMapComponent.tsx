'use client'
import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import ControlPanel from './ControlPanel';
import { Session } from 'next-auth';


const GoogleMapComponent = ({ session }: { session: Session | null }) => {
    return (
        <APIProvider
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
            onLoad={() => {
                console.log('Google Maps API loaded successfully.');
            }}
            onError={(error) => {
                console.error('Error loading Google Maps API:', error);
            }}
        >
            <Map
                style={{ width: '100vw', height: '100vh' }}
                defaultCenter={{ lat: 22.54992, lng: 0 }}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            />

            <ControlPanel session={session} />
        </APIProvider >
    );
};

export default GoogleMapComponent;
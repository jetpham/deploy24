'use client'
import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import ControlPanel from './ControlPanel';
import { Session } from 'next-auth';
import { getLatLong } from './getLatLong';
import Loading from './Loading';
import getAdvancedMarkersDiv from './Marker';


const GoogleMapComponent = ({ session }: { session: Session | null }) => {
    const [location, setLocation] = React.useState<{ latitude: number, longitude: number } | null>(null);

    React.useEffect(() => {
        const fetchLocation = async () => {
            const loc = await getLatLong();
            setLocation(loc);
        };
        fetchLocation();
    }, []);

    if (!location) {
        return (<Loading />)
    }

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
                defaultCenter={{ lat: location.latitude, lng: location.longitude }}
                defaultZoom={17}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId={process.env.NEXT_PUBLIC_MAP_ID}
            >
                {getAdvancedMarkersDiv(10, location.latitude, location.longitude)}
            </Map>
            <ControlPanel session={session} />
        </APIProvider >
    );
};

export default GoogleMapComponent;
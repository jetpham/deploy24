
export interface MarkerData {
    latitude: number;
    longitude: number;
    messageText: string;
    createdAt: Date;
}

import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const createAdvancedMarker = (lat: number, lng: number, message: string, messageDate: Date) => {
    return (
        <AdvancedMarker position={{ lat, lng }} key={`${lat}-${lng}`}>
            <Card>
                <CardHeader>
                    <CardTitle>{message}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{messageDate.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</CardDescription>
                </CardContent>
            </Card>
        </AdvancedMarker>
    );
};

const generateRandomMarkers = (count: number, centerLatitude: number, centerLongitude: number): MarkerData[] => {
    const markers: MarkerData[] = [];
    for (let i = 0; i < count; i++) {
        const scaleNoise = 0.1;
        const latitude = centerLatitude + (Math.random() - 0.5) * scaleNoise;
        const longitude = centerLongitude + (Math.random() - 0.5) * scaleNoise;
        const messageText = `Marker ${i + 1}`;
        const createdAt = new Date();
        markers.push({ latitude, longitude, messageText, createdAt });
    }
    return markers;
};

const getAdvancedMarkersDiv = (count: number, centerLatitude: number, centerLongitude: number) => {
    const markers = generateRandomMarkers(count, centerLatitude, centerLongitude);
    return (
        <div>
            {markers.map((marker) =>
                createAdvancedMarker(marker.latitude, marker.longitude, marker.messageText, marker.createdAt)
            )}
        </div>
    );
};

export default getAdvancedMarkersDiv;


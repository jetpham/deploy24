export const getLatLong = (): Promise<{ latitude: number; longitude: number } | null> => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    console.error('Error getting user location:', error);
                    reject(null);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            reject(null);
        }
    });
};
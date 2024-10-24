'use client'; // Make this a Client Component

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const GPSSection: React.FC = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>('en'); // Default to English

  // Function to get the GPS data
  const getGPSLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Update the state with the location data
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          const detectedLanguage = getLanguageFromCoordinates(latitude, longitude);
          setLanguage(detectedLanguage);
          Cookies.set('language', detectedLanguage, { expires: 30 }); // Save language in cookies for 30 days
        },
        (err) => {
          // Handle errors
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  // Function to determine the language based on coordinates
  const getLanguageFromCoordinates = (lat: number, lon: number): string => {
    // Define your logic to determine the language based on coordinates
    // Switzerland
    if (lat >= 45.815 && lat <= 47.121 && lon >= 6.627 && lon <= 10.955) {
      return 'de'; // German (Central and Northern Switzerland)
    } else if (lat >= 46.818 && lat <= 47.392 && lon >= 5.956 && lon <= 10.493) {
      return 'fr'; // French (Western Switzerland)
    } else if (lat >= 45.833 && lat <= 46.519 && lon >= 8.888 && lon <= 9.231) {
      return 'it'; // Italian (Southern Switzerland, Ticino region)
    } else if (lat >= 46.656 && lat <= 47.014 && lon >= 8.550 && lon <= 9.034) {
      return 'rm'; // Romansh (Some regions in Graubünden)
    }
    
    // Germany
    else if (lat >= 47.270 && lat <= 55.058 && lon >= 5.866 && lon <= 15.041) {
      return 'de'; // German (All of Germany)
    }

    // Austria
    else if (lat >= 46.362 && lat <= 49.039 && lon >= 9.530 && lon <= 17.158) {
      return 'de'; // German (All of Austria)
    }

    // Default to English
    return 'en';
  };

  // Call the function when the component mounts
  useEffect(() => {
    getGPSLocation();
  }, []);

  return (
    <section style={{ marginTop: '20px', textAlign: 'center' }}>
    </section>
  );
};

export default GPSSection;

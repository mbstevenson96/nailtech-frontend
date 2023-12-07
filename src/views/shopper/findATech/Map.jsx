import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Input, Box, HStack, Spacer } from '@chakra-ui/react';
import { iconPerson } from './Icon';
import { FaInstagram } from 'react-icons/fa';

const UserProfilesMap = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [zipCodeCoordinates, setZipCodeCoordinates] = useState({
    lat: 40,
    lon: -82,
  });
  const [zip, setZip] = useState('');

  useEffect(() => {
    const fetchCoordinates = () => {
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${zip}`)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            setZipCodeCoordinates({
              lat: parseFloat(data[0].lat),
              lon: parseFloat(data[0].lon),
            });
          }
        })
        .catch(error =>
          console.error('Error fetching zip code coordinates:', error),
        );
    };

    if (zip) {
      fetchCoordinates();
    }
  }, [zip]);

  const handleZipChange = e => {
    setZip(e.target.value);
  };

  // Hardcoded user profiles for demonstration purposes
  useEffect(() => {
    const userProfilesData = [
      {
        id: 1,
        name: 'Helena Tamar',
        address: '1137 Woodland Park Blvd, Columbus, OH',
        coordinates: { lat: 40.04360098648579, lon: -82.95895974417773 },
      },
      // Add more user profiles...
    ];

    setUserProfiles(userProfilesData);
  }, []);

  return (
    <>
      <MapContainer
        center={[40.04360098648579, -82.95895974417773]}
        zoom={10}
        style={{ height: '400px'}}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {userProfiles.map(profile => (
          <Marker
            key={profile.id}
            position={[profile.coordinates.lat, profile.coordinates.lon]}
            icon={iconPerson}
          >
            <Popup>
              <p>{profile.address}</p>
              <HStack>
                <p>{profile.name}</p><Spacer></Spacer><FaInstagram />
              </HStack>
            </Popup>
          </Marker>
        ))}
        <Marker position={[39.957749108762265, -82.99503095005798]}>
          <Popup>
            <h3>You</h3>
          </Popup>
        </Marker>
      </MapContainer>
      <Box>
        <Input
          type="text"
          name="zip"
          value={zip}
          onChange={handleZipChange}
          placeholder="Enter ZIP code"
        />
      </Box>
    </>
  );
};

export default UserProfilesMap;

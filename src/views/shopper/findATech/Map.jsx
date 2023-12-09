import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Input, Box, HStack, Spacer, Text, Button } from '@chakra-ui/react';
import { iconPerson } from './Icon';
import { FaInstagram } from 'react-icons/fa';
import L from 'leaflet';
import classes from './Icon.module.css';

const UserProfilesMap = ({searchTerm, profiles}) => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [zipCodeCoordinates, setZipCodeCoordinates] = useState({
    lat: 40.04360098648579,
    lon: -82.95895974417773,
  });
  const [zip, setZip] = useState('');
 const handleViewProfile = profile => {
   console.log('View Profile:', profile);
 };
  useEffect(() => {
    const fetchCoordinates = () => {
      if (/\d/.test(searchTerm)) {
        // If the searchTerm contains numbers (assumed zip code), fetch coordinates. Not the best solution but fine for now
        fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${searchTerm}`,
        )
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
      }
    };

    fetchCoordinates();
  }, [searchTerm]);

  const handleZipChange = e => {
    setZip(e.target.value);
  };

  useEffect(() => {

    setUserProfiles(profiles);
  }, []);

  return (
    <>
      <MapContainer
      center={[40.04360098648579, -82.95895974417773]}
      zoom={10}
      style={{ height: '400px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {profiles.map(profile => (
        <Marker
          key={profile.id}
          position={[profile.coordinates.lat, profile.coordinates.lon]}
          icon={new L.Icon({
                iconUrl: profile.profilePicture,
                iconRetinaUrl: profile.profilePicture,
                iconAnchor: [profile.coordinates.lat, profile.coordinates.lon],
                popupAnchor: [0, -75],
                shadowUrl: null,
                shadowSize: null,
                shadowAnchor: null,
                iconSize: new L.Point(60, 75),
                className: classes.roundedIcon,
              })}
        >
          <Popup>
            <Text>{profile.address}</Text>
            <HStack>
              <Text>{profile.name}</Text>
              <FaInstagram />
            </HStack>
            <Button
              size="sm"
              colorScheme="pink"
              onClick={() => handleViewProfile(profile)}
            >
              View Details
            </Button>
          </Popup>
        </Marker>
      ))}
      <Marker position={[zipCodeCoordinates.lat, zipCodeCoordinates.lon]}><Popup>You</Popup></Marker>
    </MapContainer>
    </>
  );
};

export default UserProfilesMap;

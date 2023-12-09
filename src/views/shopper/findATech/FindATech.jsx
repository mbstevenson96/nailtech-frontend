import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Input,
  Button,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Container,
} from '@chakra-ui/react';
import Map from './Map';
import Layout from '../../../components/Layout';
import Helen from '../../../assets/helenaProfilePic.jpg';
import Aaron from '../../../assets/aaronProfilePic.jpg';
import Samantha from '../../../assets/samanthaProfilePic.jpg';
import Julissa from '../../../assets/julissaProfilePic.jpg'


// Sample Nail Techs data (replace with your data)
const nailTechsData = [
  {
    id: 1,
    name: 'Helena Tamar',
    location: 'Location 1',
    profile: 'Profile 1',
    profilePicture: Helen,
    zipCode: 43224,
    coordinates: { lat: 40.04360098648579, lon: -82.95895974417773 },
  },
  {
    id: 2,
    name: 'Julissa Natalino',
    location: 'Location 2',
    profile: 'Profile 2',
    socialMediaLinks: {
      instagram: 'www.instagram.com/jdNails',
      facebook: 'www.facebook.com/jdNail',
    },
    profilePicture: Julissa,
    website: 'https://www.jdnails.com',
    zipCode: 43215,
    coordinates: { lat: 39.96712322804097, lon: -83.00184380349856 },
  },
  {
    id: 3,
    name: 'Samantha Sosa',
    location: 'Location 2',
    profile: 'Profile 2',
    socialMediaLinks: {
      instagram: 'www.instagram.com/jdNails',
      facebook: 'www.facebook.com/jdNail',
    },
    profilePicture: Samantha,
    website: 'https://www.jdnails.com',
    zipCode: 43085,
    coordinates: { lat: 40.259736498718034, lon: -83.21659510786779 },
  },
  {
    id: 4,
    name: 'Aaron McConnell',
    location: 'Location 2',
    profile: 'Profile 2',
    socialMediaLinks: {
      instagram: 'www.instagram.com/jdNails',
      facebook: 'www.facebook.com/jdNail',
    },
    profilePicture: Aaron,
    website: 'https://www.jdnails.com',
    zipCode: 43227,
    coordinates: { lat: 39.04360098648579, lon: -80.95895974417773 },
  },
];

const ProfileCard = ({ tech, openModal }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      borderWidth="1px"
      borderRadius="lg"
      p="4"
      mb="4"
      width="18vw"
    >
      <Heading as="h3" size="md" mb="2" textAlign="center">
        {tech.name}
      </Heading>
      <Flex justifyContent="center" alignItems="center" mb="2">
        <Image
          width="150px"
          height="150px"
          color="gray.600"
          src={tech.profilePicture}
        />
      </Flex>
      <Button
        colorScheme="pink"
        alignSelf="center"
        width="8vw"
        onClick={() => openModal(tech)}
        border="none"
      >
        View Profile
      </Button>
    </Flex>
  );
};


const FindATech = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState(null);
  const [filteredTechs, setFilteredTechs] = useState(nailTechsData);
  const [isSearchingByZipCode, setIsSearchingByZipCode] = useState(false);

   const handleSearch = () => {
     const filtered = nailTechsData.filter(
       tech =>
         tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         tech.location.toLowerCase().includes(searchTerm.toLowerCase()),
     );
     setFilteredTechs(filtered);
     setIsSearchingByZipCode(/\d/.test(searchTerm));
   };

   const handleSearchTypeToggle = () => {
     setIsSearchingByZipCode(prevState => !prevState);
     setSearchTerm('');
   };

   const handleInputChange = event => {
     setSearchTerm(event.target.value); // Update search term as the user types
     const filtered = nailTechsData.filter(
       tech =>
         tech.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
         tech.zipCode
           .toString()
           .toLowerCase()
           .includes(event.target.value.toLowerCase()),
     );
     setFilteredTechs(filtered);
   };


  const openModal = tech => {
    setSelectedTech(tech);
  };

  const closeModal = () => {
    setSelectedTech(null);
  };

  return (
    <Layout>
      <Flex flexDirection="column" alignItems="center" mb="4">
        <Container padding="none" textAlign="center">
          <Heading as="h1" size="xl" mb="4" marginTop="4rem">
            Find a Nail Tech
          </Heading>
          <Text fontSize="xl" color="gray.600" mb={4} marginTop="1rem">
            Discover the difference with our certified nail techs — real people
            and real artists dedicated to quality and care. Each tech is
            certified per state requirements. Enter your zip code or the
            artist's name to support local talent today.
          </Text>
        </Container>
        <Flex alignItems="flex-start" flexDirection="column">
          <Flex gap="1rem">
            <Input
              placeholder={
                isSearchingByZipCode
                  ? 'Search by zip code...'
                  : 'Search by nail tech...'
              }
              value={searchTerm}
              onChange={handleInputChange} // Handle change as the user types
              width="30rem"
            />
            <Button width="8rem" border="none" onClick={handleSearch}>
              Search
            </Button>
          </Flex>
          <Text
            fontSize="sm"
            color="blue.500"
            cursor="pointer"
            onClick={handleSearchTypeToggle}
          >
            {isSearchingByZipCode
              ? 'Search by Nail Tech'
              : 'Search by Zip Code'}
          </Text>
        </Flex>
      </Flex>

      <Flex flexWrap="wrap" margin="3rem" justifyContent="space-around">
        {filteredTechs.map(tech => (
          <ProfileCard key={tech.id} tech={tech} openModal={openModal} />
        ))}
      </Flex>
      <Modal isOpen={selectedTech !== null} onClose={closeModal} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedTech?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{selectedTech?.profile}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Map searchTerm={searchTerm} profiles={filteredTechs} />
    </Layout>
  );
};

export default FindATech;

import React, { useState } from 'react';
import {
  Box,
  Heading,
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  HStack,
  Text,
  IconButton,
  Image,
  FormControl,
  FormLabel,
  Input,
  ModalFooter
} from '@chakra-ui/react';
import { MdStar, MdStarBorder } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';

const Dashboard = () => {
  const initialProfileData = {
    firstName: 'John',
    lastName: 'Doe',
    displayName: 'JD Nails',
    socialMediaLinks: {
        instagram: "www.instagram.com/jdNails",
        facebook: "www.facebook.com/jdNail",
    },
    profilePicture: 'https://via.placeholder.com/150',
    website: 'https://www.jdnails.com',
  };

  const [profileData, setProfileData] = useState(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Updated profile:', profileData);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

    const fieldLabels = {
      firstName: 'First Name',
      lastName: 'Last Name',
      displayName: 'Display Name',

    };

  const socialMediaIcons = () => {
    const icons = {
      instagram: <FaInstagram />,
      facebook: <ImFacebook2 />,
    };

    return (
      <HStack spacing={4}>
        {Object.entries(profileData.socialMediaLinks).map(([key, link]) => {
          if (icons[key]) {
            return (
              <IconButton
                key={key}
                as="a"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                icon={icons[key]}
                variant="ghost"
                fontSize="24px"
              />
            );
          }
          return null;
        })}
      </HStack>
    );
  };


  return (
    <Box p={8}>
      {/* Profile Section */}
      <Box mb={8}>
        <Heading as="h2" size="md" mb={4}>
          Profile
        </Heading>
        <Stack direction="row" spacing={6} alignItems="flex-start">
          <Box>
            <Image
              src={profileData.profilePicture}
              alt="Profile"
              boxSize="150px"
              borderRadius="full"
            />
            <Stack mt={4} spacing={2}>
              <Box>{profileData.displayName}</Box>
              <HStack>
                <Box>
                  {profileData.firstName} {profileData.lastName}
                </Box>
              </HStack>
              <Box>
                <strong>Social Media Links:</strong> {socialMediaIcons()}
              </Box>
              <Button mt={4} onClick={handleEdit}>
                Edit Profile
              </Button>
            </Stack>
          </Box>
        </Stack>

        {/* Edit Profile Modal */}
        <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                {Object.entries(profileData).map(([key, value]) => (
                  <FormControl key={key}>
                    <FormLabel>{fieldLabels[key]}</FormLabel>
                    <Input name={key} value={value} onChange={handleChange} />
                  </FormControl>
                ))}
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSave}>
                Save
              </Button>
              <Button variant="ghost" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Dashboard;

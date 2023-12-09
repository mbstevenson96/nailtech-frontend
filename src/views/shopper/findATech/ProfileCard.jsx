import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';


const ProfileCard = ({ tech, openModal }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
      <Heading as="h3" size="md" mb="2">
        {tech.name}
      </Heading>
      <Image src={tech.img} />
      <Button size="sm" width="8vw" onClick={() => openModal(tech)}>
        View Profile
      </Button>
    </Box>
  );
};

export default ProfileCard;

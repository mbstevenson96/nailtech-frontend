import React, { useState } from 'react';
import { MdStar, MdStarBorder } from 'react-icons/md';
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
  ModalFooter,
} from '@chakra-ui/react';
function Reviews({ reviewsData }) {
  const [viewAllModalOpen, setViewAllModalOpen] = useState(false);
  const handleViewAll = () => {
    setViewAllModalOpen(true);
  };

  const handleCloseModal = () => {
    setViewAllModalOpen(false);
  };
  return (
    <Box>
      <Box>
        <Heading as="h2" size="md" mb={4}>
          Reviews
        </Heading>
        <Button onClick={handleViewAll} variant="link">
          View All
        </Button>
        <Stack spacing={4}>
          {reviewsData.map(review => (
            <Box key={review.id} p={4} borderWidth="1px" borderRadius="md">
              <HStack mb={2}>
                <Text>
                  <strong>{review.author}</strong>
                </Text>
                {[...Array(5)].map((_, index) => (
                  <IconButton
                    key={index}
                    aria-label={`rating-${index}`}
                    icon={index < review.rating ? <MdStar /> : <MdStarBorder />}
                    color={index < review.rating ? 'yellow.500' : 'gray.300'}
                    size="sm"
                    variant="ghost"
                    pointerEvents="none"
                  />
                ))}
              </HStack>
              <Text>{review.review}</Text>
            </Box>
          ))}
        </Stack>

        {/* View All Reviews Modal */}
        <Modal isOpen={viewAllModalOpen} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>All Reviews</ModalHeader>
            <ModalCloseButton />
            <ModalBody maxHeight="60vh" overflowY="auto">
              <VStack spacing={4}>
                {reviewsData.map(review => (
                  <Box
                    key={review.id}
                    p={4}
                    borderWidth="1px"
                    borderRadius="md"
                  >
                    <Text>
                      <strong>{review.author}</strong>
                    </Text>
                    <HStack mb={2}>
                      {[...Array(5)].map((_, index) => (
                        <IconButton
                          key={index}
                          aria-label={`rating-${index}`}
                          icon={
                            index < review.rating ? (
                              <MdStar />
                            ) : (
                              <MdStarBorder />
                            )
                          }
                          color={
                            index < review.rating ? 'yellow.500' : 'gray.300'
                          }
                          size="sm"
                          variant="ghost"
                          pointerEvents="none"
                        />
                      ))}
                    </HStack>
                    <Text>{review.review}</Text>
                  </Box>
                ))}
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}

export default Reviews;

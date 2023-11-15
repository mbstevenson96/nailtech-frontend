import React, { useState } from 'react';
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Text,
  Divider,
} from '@chakra-ui/react';

const Checkout = ({showCheckout, closeCheckout}) => {
  // Mock product details
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 39.99,
    },
  ];

  const getTotalPrice = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  return (
    <Box>
      <Modal isOpen={showCheckout} onClose={closeCheckout}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {products.map(product => (
              <Box key={product.id} mb={4}>
                <Text>{product.name}</Text>
                <Text>${product.price.toFixed(2)}</Text>
                <Divider />
              </Box>
            ))}
            <Box mt={4}>
              <Text fontWeight="bold">
                Total: ${getTotalPrice().toFixed(2)}
              </Text>
            </Box>
            <FormControl mt={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Enter your name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Address</FormLabel>
              <Input type="text" placeholder="Enter your address" />
            </FormControl>
            {/* Additional form fields like payment details can be added here */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeCheckout}>
              Close
            </Button>
            <Button variant="ghost">Confirm Payment</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Checkout;

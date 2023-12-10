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
  HStack,
  Image,
} from '@chakra-ui/react';

const Checkout = ({ showCheckout, closeCheckout, products, totalPrice }) => {
  const getTotalPrice = () => {
    return products?.reduce((total, product) => total + product.price, 0);
  };
  const [showCheckoutSummary, setShowCheckoutSummary] = useState(false);

  const handleConfirmPayment = () => {
    setShowCheckoutSummary(true)

  };
  const closeOrderCompleteModal = () => {
    closeCheckout(); // Close the main checkout modal after order completion
  };
  return (
    <Box>
      {!showCheckoutSummary && (
        <Modal isOpen={showCheckout} onClose={closeCheckout}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Checkout</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {products?.map(product => (
                <Box key={product.id} mb={4}>
                  <Text fontWeight="bold">{product.title}</Text>
                  <Text>{product.description}</Text>
                  <HStack justify="space-between" align="center">
                    <Image
                      src={product.img}
                      alt={product.title}
                      boxSize="100px"
                      objectFit="cover"
                    />
                    <Box>${product.price}</Box>
                  </HStack>
                  <Divider />
                </Box>
              ))}
              <Text fontWeight="bold">Total: {totalPrice}</Text>
              <FormControl mt={4}>
                <FormLabel>Card Number</FormLabel>
                <Input type="text" placeholder="Enter card number" />
              </FormControl>
              <HStack mt={4}>
                <FormControl>
                  <FormLabel>Expiration Date</FormLabel>
                  <Input type="text" placeholder="MM/YY" />
                </FormControl>
                <FormControl>
                  <FormLabel>CVV</FormLabel>
                  <Input type="text" placeholder="CVV" />
                </FormControl>
              </HStack>
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
              <Button border="none" mr={3} onClick={closeCheckout}>
                Cancel
              </Button>
              <Button
                variant="ghost"
                backgroundColor="#e3c4cc"
                onClick={handleConfirmPayment}
              >
                Confirm Payment
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      {showCheckoutSummary && (
        <Modal isOpen={showCheckoutSummary} onClose={closeCheckout}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Order Complete!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Your order has been successfully placed.</Text>
              {products.map(product => (
                <Box key={product.id} mb={4}>
                  <Text>{product.title}</Text>
                  <Text>${product.price.toFixed(2)}</Text>
                  <Divider />
                </Box>
              ))}
              <Box mt={4}>
                <Text fontWeight="bold">
                  Total: ${getTotalPrice().toFixed(2)}
                </Text>
              </Box>
              {/* Additional order summary details can be added here */}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={closeCheckout}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Checkout;

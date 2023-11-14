import React, { useState } from 'react';
import {
  Box,
  Text,
  Image,
  Button,
  VStack,
  HStack,
  Divider,
  Badge,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150',
      price: 29.99,
      quantity: 1,
    },
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const handleQuantityChange = (itemId, value) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: parseInt(value) } : item,
      ),
    );
  };

  const handleRemoveItem = itemId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <Box p={4}>
      <VStack align="flex-start" spacing={4}>
        {cartItems.map(item => (
          <Box key={item.id} w="100%">
            <HStack justify="space-between" align="center">
              <Image
                src={item.image}
                alt={item.name}
                boxSize="150px"
                objectFit="cover"
              />
              <Box flex="1" ml={4}>
                <Text fontSize="lg" fontWeight="bold">
                  {item.name}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  ${item.price} each
                </Text>
                <Text fontSize="md">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </Text>
                <HStack spacing={2} mt={2}>
                  <NumberInput
                    size="sm"
                    defaultValue={item.quantity}
                    min={1}
                    max={10}
                    onChange={valueString =>
                      handleQuantityChange(item.id, valueString)
                    }
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Button
                    size="sm"
                    colorScheme="red"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </HStack>
              </Box>
            </HStack>
            <Divider mt={3} />
          </Box>
        ))}
        <Box w="100%">
          <Text fontSize="lg" fontWeight="bold">
            Total: ${getTotalPrice().toFixed(2)}
          </Text>
          <Button colorScheme="teal" mt={4}>
            Checkout
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default ShoppingCart;

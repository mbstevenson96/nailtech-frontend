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
import { BsTrash3Fill } from 'react-icons/bs';
import Checkout from '../checkout/Checkout';

function ShoppingCart({cart, removeFromCart, addToCart, handleQuantityChange}) { // consider using callBack
  const [showCheckout, setShowCheckout] = useState(false);
  const toggleCheckoutModal = () => setShowCheckout(!showCheckout);
  const handleCheckout = e => {
    e.preventDefault();
    toggleCheckoutModal();
  };

  const closeCheckout = () => {
    setShowCheckout(false)
  }

const getTotalPrice = () => {
  return cart?.reduce((total, item) => {
    const itemPrice = parseFloat(item.price);
    const itemQuantity = parseInt(item.quantity); 

    return total + itemPrice * itemQuantity;
  }, 0);
};
console.log(cart)
  return (
    <Box p={4}>
      <VStack align="flex-start" spacing={4}>
        {cart?.map(item => (
          <Box key={item.id} w="100%">
            <Text fontWeight="bold">{item.title}</Text>
            <Text>{item.description}</Text>
            <HStack justify="space-between" align="center">
              <Image
                src={item.img}
                alt={item.name}
                boxSize="100px"
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
                  Total: ${(item.price * item.quantity)?.toFixed(2)}
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
                  <BsTrash3Fill
                    size={'50'}
                    color={'red'}
                    onClick={() => removeFromCart(item.id)}
                  />
                </HStack>
              </Box>
            </HStack>

            <Divider mt={3} />
          </Box>
        ))}
        <Box w="100%">
          <Text fontSize="lg" fontWeight="bold">
            Total: ${getTotalPrice()?.toFixed(2)}
          </Text>
          <Button
            backgroundColor="#e3c4cc"
            mt={4}
            onClick={() => setShowCheckout(true)}
            border="none"
          >
            Checkout
          </Button>
        </Box>
      </VStack>
      {showCheckout && (
        <Checkout showCheckout={showCheckout} closeCheckout={closeCheckout} />
      )}
    </Box>
  );
}

export default ShoppingCart;

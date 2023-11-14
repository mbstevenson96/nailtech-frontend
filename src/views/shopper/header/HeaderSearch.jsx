import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  FormLabel,
  Input,
  FormControl,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ShoppingCart from './../cart/ShoppingCart.jsx';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showCart, setShowCart] = useState(false)
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  const openSignupModal = () => setShowSignupModal(true);
  const closeSignupModal = () => setShowSignupModal(false);


    const handleLogin = e => {
      e.preventDefault();
      closeLoginModal();
      // login logic here
    };

    const handleSignup = e => {
      e.preventDefault();
      closeSignupModal();
      // signup logic here
    };

  return (
    <Box as="header" bg="pink" color="white" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="2rem" fontWeight="bold">
          Nail Tech
        </Text>
        <Flex>
          <Button bg="pink" mr={5} onClick={toggleCart}>
            <Icon as={AiOutlineShoppingCart} boxSize={6} />
          </Button>
          <Button variant="outline" mr={4} onClick={openLoginModal}>
            Login
          </Button>
          <Button colorScheme="blue" onClick={openSignupModal}>
            Sign Up
          </Button>
        </Flex>
      </Flex>

      {/* The following needs to be broken into different files */}
      {/* Login Modal */}
      <Modal isOpen={showLoginModal} onClose={closeLoginModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleLogin}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" placeholder="Enter your email" />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="Enter your password" />
                </FormControl>
                <Button type="submit" colorScheme="teal">
                  Login
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Signup Modal, same as login for now */}
      <Modal isOpen={showSignupModal} onClose={closeSignupModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSignup}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" placeholder="Enter your email" />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="Enter your password" />
                </FormControl>
                <Button type="submit" colorScheme="teal">
                  Sign Up
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Drawer isOpen={showCart} onClose={toggleCart} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>
          <DrawerBody>
            <ShoppingCart />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;

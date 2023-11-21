import React, { useState } from 'react';
import AuthModals from '../authModals/AuthModals.jsx';
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
  DrawerCloseButton,
  LinkBox,
  Spacer,
  Link
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ShoppingCart from './../cart/ShoppingCart.jsx';
import Checkout from '../checkout/Checkout.jsx';

const Header = ({cart, setCart}) => {
  // holding pages as use states until routes are added
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  const toggleLogInModal = () => setShowLoginModal(!showLoginModal);
  const toggleSignUpModal = () => setShowSignupModal(!showSignupModal);

  const handleLogin = e => {
    e.preventDefault();
    toggleLogInModal();
    // login logic here
  };

  const handleSignup = e => {
    e.preventDefault();
    toggleSignUpModal();
    // signup logic here
  };

  return (
    <Box as="header" bg="pink" color="white" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex justifyContent="space-around" alignContent="center">
          <Text fontSize="2rem" fontWeight="bold">
            Nail Tech
          </Text>
          <Link href="/shopper/products">
            <Button bg="pink" ml={4}>
              Shop Nail Sets
            </Button>
          </Link>
          <Link href="/shopper/customizer">
            <Button bg="pink" ml={4}>
              Create a Set
            </Button>
          </Link>
          <Link href="/shopper/nailtechs">
            <Button bg="pink" ml={4}>
              Find a Tech
            </Button>
          </Link>
        </Flex>
        <Flex alignItems="center">
          <Spacer />
          <Button variant="outline" mr={4} onClick={toggleLogInModal}>
            Login
          </Button>
          <Button colorScheme="blue" mr={4} onClick={toggleSignUpModal}>
            Sign Up
          </Button>
          <Button bg="pink" onClick={toggleCart}>
            <Icon as={AiOutlineShoppingCart} boxSize={6} />
          </Button>
          {/* Other buttons */}
        </Flex>
      </Flex>

      {/* The following needs to be broken into different files */}
      {/* Login Modal */}
      <Modal isOpen={showLoginModal} onClose={toggleLogInModal}>
        {/* <ModalOverlay />
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
        </ModalContent> */}
        <AuthModals showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} showSignupModal={showSignupModal} setShowLoginModal={setShowSignupModal} />
      </Modal>

      {/* Signup Modal, same as login for now */}
      <Modal isOpen={showSignupModal} onClose={toggleSignUpModal}>
        {/* <ModalOverlay />
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
        </ModalContent> */}
      </Modal>
      {/* shopping cart */}
      <Drawer isOpen={showCart} onClose={toggleCart} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>
          <DrawerBody>
            <ShoppingCart cart={cart} setCart={setCart} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;

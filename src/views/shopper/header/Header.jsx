import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
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
  Link,
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ShoppingCart from './../cart/ShoppingCart.jsx';
import Checkout from '../checkout/Checkout.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

const Header = ({ cart, setCart, user, handleLogout }) => {
  // holding pages as use states until routes are added
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <nav>
      <h2>Nail Tech</h2>
      {user ? (
        <ul>
          <li>
            <ChakraLink as={ReactRouterLink} to="/my-profile">
              My Profile
            </ChakraLink>
          </li>
          <li>
            <ChakraLink as={ReactRouterLink} to="/" onClick={handleLogout}>
              Logout
            </ChakraLink>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <ChakraLink as={ReactRouterLink} to="/shopper/products">
              Shop Nail Sets
            </ChakraLink>
          </li>
          <li>
            <ChakraLink as={ReactRouterLink} to="/shopper/customizer">
              Create a Set
            </ChakraLink>
          </li>
          <li>
            <ChakraLink as={ReactRouterLink} to="/shopper/nailtechs">
              Find a Tech
            </ChakraLink>
          </li>
          <li>
            <ChakraLink as={ReactRouterLink} to="/login">
              Log In
            </ChakraLink>
          </li>
          <li>
            <ChakraLink as={ReactRouterLink} to="/signup">
              Sign Up
            </ChakraLink>
          </li>
          <Button onClick={toggleCart}>
            <Icon as={AiOutlineShoppingCart} boxSize={6} />
          </Button>

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
        </ul>
      )}
    </nav>
  );
};

export default Header;

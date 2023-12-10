import React, { useState, useContext } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import {
  Link as ChakraLink,
  Button,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Flex,
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ShoppingCart from './../cart/ShoppingCart.jsx';
import LoginModal from '../authModals/LoginModal.jsx';
import SignupModal from '../authModals/SignupModal.jsx';
import { CartContext } from '../../../shoppingCart/CartContext.jsx';

const Header = ({  user, handleLogout }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  const { cart, setCart, removeFromCart, handleQuanityChange } = useContext(CartContext);

  return (
    <Flex
      align="center"
      justify="space-between"
      p={4}
      fontFamily="Poppins"
      background="linear-gradient(135deg, rgb(255,221,226, 0.3),  rgb(255,221,226, 0.2))"
      padding="2rem"
    >
      <Flex align="center">
        <ChakraLink
          as={ReactRouterLink}
          to="/"
          fontSize="xl"
          fontWeight="bold"
          mr={8}
        >
          <img src={Logo} width="100" alt="Logo" />
        </ChakraLink>
        {!user ? (
          <Flex align="center" fontWeight="bold">
            <ChakraLink as={ReactRouterLink} to="/shopper/products" mr={4}>
              Shop Nail Sets
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/shopper/customizer" mr={4}>
              Create a Set
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/shopper/nailtechs" mr={4}>
              Find a Tech
            </ChakraLink>
          </Flex>
        ) : (
          <Flex align="center">
            <ChakraLink as={ReactRouterLink} to="/my-profile" mr={4}>
              My Profile
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              to="/"
              onClick={handleLogout}
              mr={4}
            >
              Logout
            </ChakraLink>
          </Flex>
        )}
      </Flex>
      {!user && (
        <Flex align="center" fontWeight="bold">
          <ChakraLink
            mr={4}
            onClick={() => setShowLoginModal(true)}
            whiteSpace="nowrap"
          >
            Log In
          </ChakraLink>
          <ChakraLink
            mr={4}
            onClick={() => setShowSignupModal(true)}
            whiteSpace="nowrap"
          >
            Sign Up
          </ChakraLink>
          <Button
            onClick={toggleCart}
            backgroundColor="transparent"
            border="none"
            p={0}
          >
            <Icon as={AiOutlineShoppingCart} boxSize={6} />
          </Button>
          <Drawer isOpen={showCart} onClose={toggleCart} placement="right">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader>Shopping Cart</DrawerHeader>
              <DrawerBody>
                <ShoppingCart cart={cart} removeFromCart={removeFromCart} handleQuantityChange={handleQuanityChange} />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      )}
      {/* Login Modal */}
      <LoginModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      {/* Signup Modal */}
      <SignupModal
        showSignupModal={showSignupModal}
        setShowSignupModal={setShowSignupModal}
      />
    </Flex>
  );
};

export default Header;

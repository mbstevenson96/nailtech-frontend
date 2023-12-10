import React, { useState } from 'react';
import Header from '../views/shopper/header/Header';
import { useCart } from '../shoppingCart/CartContext.jsx';
import { Container } from '@chakra-ui/react';
const Layout = ({ children }) => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <>
      <Header cart={cart} />
     {children}
    </>
  );
};

export default Layout;

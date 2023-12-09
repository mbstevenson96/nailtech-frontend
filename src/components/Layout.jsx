import React, { useState } from 'react';
import Header from '../views/shopper/header/Header';
import { useCart } from '../shoppingCart/CartContext.jsx';
const Layout = ({ children }) => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

 

  return (
    <div>
      <Header cart={cart} />
      {children}
    </div>
  );
};

export default Layout;

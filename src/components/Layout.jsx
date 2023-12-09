import React, { useState } from 'react';
import Header from '../views/shopper/header/Header';
import { useCart } from '../shoppingCart/CartContext.jsx';
const Layout = ({ children }) => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const products = [
    {
      id: 1,
      title: 'Cool Product',
      description: 'This is a really awesome product!',
      price: 29.99,
      quantity: 1,
    },
    {
      id: 2,
      title: 'Awesome Product',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 3,
      title: 'Awesome Product',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 4,
      title: 'Awesome Product',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 5,
      title: 'Awesome Product',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 6,
      title: 'Awesome Product',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 7,
      title: 'Awesome Product',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 8,
      title: 'Awesome Product',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 9,
      title: 'Awesome Product',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
  ];

  return (
    <div>
      <Header cart={cart} />
      {children}
    </div>
  );
};

export default Layout;

import React, { useState } from 'react';
import Header from '../header/Header';
import LandingPage from './Landing';

export default function Home() {
  const [cart, setCart] = useState([]);

  const onAddToCart = product => {
    setCart(prevCart => [...prevCart, product]);
  };

  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <LandingPage onAddToCart={onAddToCart} />
    </>
  );
}

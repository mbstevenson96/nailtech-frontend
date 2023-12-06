import React, { useState } from 'react';
import Header from '../header/Header';
import LandingPage from './Landing';
import { Box } from '@chakra-ui/react';
import accent2 from '../../../assets/accent2.png';
import './Home.css'; 

export default function Home() {
  const [cart, setCart] = useState([]);

  const onAddToCart = product => {
    setCart(prevCart => [...prevCart, product]);
  };

  return (
    <Box
      className="home-container"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      minHeight="100vh"
    >
      <Header cart={cart} setCart={setCart} />
      <LandingPage onAddToCart={onAddToCart} />
    </Box>
  );
}

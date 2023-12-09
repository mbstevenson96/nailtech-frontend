// Home.js
import React from 'react';
import Layout from '../../../components/Layout';
import LandingPage from './Landing';
import { Box } from '@chakra-ui/react';
import accent from '../../../assets/accentBackground.png';
import './Home.css';
import { useCart } from '../../../shoppingCart/CartContext';

export default function Home() {
  const { addToCart } = useCart();

  return (
    <Layout>
      <Box
        className="home-container"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundAttachment="fixed"
        backgroundImage={`linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${accent})`}
        minHeight="100vh"
      >
        <LandingPage onAddToCart={addToCart} />
      </Box>
    </Layout>
  );
}

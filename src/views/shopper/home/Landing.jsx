import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Text,
  Link,
  Image,
  Flex,
} from '@chakra-ui/react';
import Carousel from './Caorusel.jsx';
import ProductCards from './Products.jsx';
// import { useNavigate } from 'react-router-dom'; waiting for react router to be set up

function LandingPage({onAddToCart}) {
  // const navigation = useNavigate();
  const handleShopNow = () => {
    alert('Shop Now needs implemented');
    // navigation.push('/products');
  };

  const carouselImages = [
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/300',
  ];

  const products = [
    {
      id: 1,
      title: 'Cool Product',
      image: 'https://via.placeholder.com/300',
      description: 'This is a really awesome product!',
      price: 29.99,
      quantity: 1,
    },
    {
      id: 2,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 3,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 4,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 5,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 6,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 7,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 8,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
    {
      id: 9,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
      quantity: 1,
    },
  ];

  return (
    <Box textAlign="center" mt={10}>
      <Heading as="h1" size="2xl" mb={4}>
        Nail Tech
      </Heading>
      <Text fontSize="xl" color="gray.600" mb={8}>
        Convenient. Quick. Beautiful. Pick a design and we'll find a certified
        nail technician to make it.
      </Text>
      <Button colorScheme="teal" size="lg" onClick={handleShopNow} mb={6}>
        Shop Now
      </Button>
      <Text fontSize="sm" color="gray.500">
        Not sure?{' '}
        <Link color="teal.500" href="#">
          Learn more
        </Link>
      </Text>
      <Carousel images={carouselImages} />
      <ProductCards products={products} onAddToCart={onAddToCart} />
    </Box>
  );
}

export default LandingPage;

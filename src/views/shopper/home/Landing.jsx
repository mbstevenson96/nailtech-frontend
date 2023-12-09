import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Text,
  Link,
  Image,
  Grid,
  GridItem,
  Container,
  Flex,
  HStack,
} from '@chakra-ui/react';
import Carousel from './Caorusel.jsx';
import ProductCards from './Products.jsx';
import heroImage1 from '../../../assets/home1.png'
import heroImage2 from '../../../assets/home2.png'
// import { useNavigate } from 'react-router-dom'; waiting for react router to be set up

function LandingPage({onAddToCart}) {
  // const navigation = useNavigate();
  const handleShopNow = () => {
    alert('Shop Now needs implemented');
    // navigation.push('/products');
  };

  const carouselImages = [
    heroImage1,
    heroImage2,
  ];

  const nailTechsData = [
    { id: 1, name: 'Tech 1', location: 'Location 1', profile: 'Profile 1',  socialMediaLinks: {
        instagram: "www.instagram.com/jdNails",
        facebook: "www.facebook.com/jdNail",
    },
    profilePicture: 'https://via.placeholder.com/150',
    website: 'https://www.jdnails.com',},
    { id: 2, name: 'Tech 2', location: 'Location 2', profile: 'Profile 2',  socialMediaLinks: {
        instagram: "www.instagram.com/jdNails",
        facebook: "www.facebook.com/jdNail",
    },
    profilePicture: 'https://via.placeholder.com/150',
    website: 'https://www.jdnails.com',},
    
    // Add more Nail Techs here
  ];

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
  ];

  return (
    <Container maxW="80vw" textAlign="center" mt={5}>
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        gap="5vw"
        width="70vw"
        mb={10}
        flexDirection={['column', 'column', 'row']} // Adjust the direction for responsiveness
      >
        <Carousel images={carouselImages} width={['100%', '100%', '100%']} />
        <Box width={['100%', '100%']}>
          <Text fontSize="xl" color="gray.600" mb={4} alignSelf="center" marginTop="8rem">
            Convenient. Quick. Beautiful. Pick a design or make a new one from
            scratch - we'll find a certified nail technician to make it.
          </Text>
          <Button
            size="md"
            onClick={handleShopNow}
            mb={4}
            width="200px"
            border="none"
          >
            Shop Now
          </Button>
        </Box>
      </Flex>

      <Box ml={8}>
        <Grid
          templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          gap={6}
          justifyContent="center"
          alignItems="center"
        >
            <GridItem>
              <Heading>Ready to Ship Sets</Heading>
              <ProductCards products={products} onAddToCart={onAddToCart} />
              <Button width="10vw" border="none">Shop All</Button>
            </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}

export default LandingPage;

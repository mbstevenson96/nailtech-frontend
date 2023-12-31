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
import {useCart} from '../../../shoppingCart/CartContext.jsx'
import redNails from '../../../assets/red.jpg'
import overheadPink from '../../../assets/overhead.jpg'
import cuteNails from '../../../assets/cuteNails.jpg'
import blackPink from '../../../assets/blackPink.png'
// import { useNavigate } from 'react-router-dom'; waiting for react router to be set up

function LandingPage() {
  // const navigation = useNavigate();
  const handleShopNow = () => {
    alert('Shop Now needs implemented');
    // navigation.push('/products');
  };

  const carouselImages = [
    heroImage1,
    heroImage2,
  ];
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

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
     title: 'Red french tips',
     description: 'By Julissa',
     price: 29.99,
     quantity: 1,
     img: redNails
   },
   {
     id: 2,
     title: 'Handpainted faces',
     description: 'By Samantha',
     price: 39.99,
     quantity: 1,
     img: cuteNails
   },
   {
     id: 3,
     title: 'Black/nude with decals',
     description: 'By Aaron',
     price: 39.99,
     quantity: 1,
     img: blackPink
   },
   {
     id: 4,
     title: 'Pink natural dip powder',
     description: 'By Helena!',
     price: 39.99,
     quantity: 1,
     img: overheadPink
   },
 ];

  return (
    <Container maxW="80vw" textAlign="center" mt={5} fontFamily="Poppins">
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        gap="5vw"
        width="70vw"
        mb={10}
        flexDirection={['column', 'column', 'row']}
      >
        <Carousel images={carouselImages} width={['100%', '100%', '100%']} />
        <Box width={['100%', '100%']}>
          <Heading color="#B0A08D" mt={10}>
            Where creativity meets your fingertips.
          </Heading>
          <Text
            fontSize="xl"
            color="gray.600"
            mb={4}
            alignSelf="center"
            marginTop="8rem"
            mt={10}
          >
            Convenient. Quick. Beautiful. Pick a design or make a new one from
            scratch - we'll find a certified nail technician to design and ship
            directly to you.
          </Text>
          <Button
            size="md"
            onClick={handleShopNow}
            mb={4}
            width="200px"
            border="none"
            backgroundColor="#e3c4cc"
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
            <ProductCards products={products} onAddToCart={addToCart} />
            <Button width="10vw" border="none" backgroundColor="#e3c4cc">
              Shop All
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}

export default LandingPage;

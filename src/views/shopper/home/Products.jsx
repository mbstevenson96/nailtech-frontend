import React from 'react';
import { Box, Image, Text, Button, Grid, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      {/* <Image
        src={product.image}
        alt={product.title}
        h="200px"
        w="100%"
        objectFit="cover"
        mb={4}
      /> */}

      <Text fontSize="xl" fontWeight="semibold" mb={2}>
        {product.title}
      </Text>
      <Text fontSize="sm" color="gray.600" mb={4}>
        {product.description}
      </Text>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        ${product.price}
      </Text>
      <Flex justifyContent="space-evenly">
        <Button
          colorScheme="pink"
          border="white"
          width="8vw"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
        <Button
          as={Link}
          to={`/products/${product.id}`}
          width="8vw"
        >
          View Details
        </Button>
      </Flex>
    </Box>
  );
};

const ProductCards = ({ products, onAddToCart }) => {

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6} p={30}>
      {products?.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </Grid>
  );
};

export default ProductCards;

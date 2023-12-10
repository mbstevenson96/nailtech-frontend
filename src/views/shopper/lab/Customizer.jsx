import React, { useState, useContext } from 'react';
import Header from '../header/Header';
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Select,
  Stack,
  Flex,
  Text,
  Divider,
} from '@chakra-ui/react';
import { CartContext } from '../../../shoppingCart/CartContext.jsx';
import { ChromePicker } from 'react-color';
import MyThree from '../../../Three.js';
import Layout from '../../../components/Layout.jsx';

function Customizer() {
  const [nailLength, setNailLength] = useState('');
  const [nailShape, setNailShape] = useState('');
  const [nailColor, setNailColor] = useState('#ff0000');
  const [total, setTotal] = useState(0);
  const [isLengthCollapsed, setIsLengthCollapsed] = useState(false);
  const [isShapeCollapsed, setIsShapeCollapsed] = useState(false);
  const { cart, setCart, addToCart, removeFromCart, handleQuanityChange } =
    useContext(CartContext);
  const colorNames = {
    '#ff0000': 'Red',
    '#00ff00': 'Green',
    '#0000ff': 'Blue',
    '#ffff00': 'Yellow',
    '#ff00ff': 'Magenta',
    '#00ffff': 'Cyan',
    '#800000': 'Maroon',
    '#008000': 'Dark Green',
    '#000080': 'Navy',
    '#808000': 'Olive',
    '#800080': 'Purple',
    '#008080': 'Teal',
    '#C0C0C0': 'Silver',
    '#808080': 'Gray',
    '#ff4500': 'Orange Red',
    '#ffa500': 'Orange',
    '#ffd700': 'Gold',
    '#ff69b4': 'Hot Pink',
    '#7fffd4': 'Aquamarine',
    '#dda0dd': 'Plum',
    '#f0e68c': 'Khaki',
    '#d2b48c': 'Tan',
    '#b0e0e6': 'Powder Blue',
    '#9acd32': 'Yellow Green',
    '#4682B4': 'Steel Blue',
    '#A52A2A': 'Brown',
    '#6B8E23': 'Olive Drab',
    '#FFA07A': 'Light Salmon',
    '#8A2BE2': 'Blue Violet',
    '#2E8B57': 'Sea Green',
    '#FF00FF': 'Magenta',
    '#DAA520': 'Goldenrod',
    '#CD853F': 'Peru',
    '#F4A460': 'Sandy Brown',
    '#2F4F4F': 'Dark Slate Gray',
    '#FF1493': 'Deep Pink',
    '#BDB76B': 'Dark Khaki',
    '#00CED1': 'Dark Turquoise',
    '#778899': 'Light Slate Gray',
    '#48D1CC': 'Medium Turquoise',
    '#191970': 'Midnight Blue',
    '#20B2AA': 'Light Sea Green',
    '#6A5ACD': 'Slate Blue',
    '#F08080': 'Light Coral',
    '#40E0D0': 'Turquoise',
    '#87CEEB': 'Sky Blue',
    '#32CD32': 'Lime Green',
    '#BA55D3': 'Medium Orchid',
    '#663399': 'Rebecca Purple',
    '#9370DB': 'Medium Purple',
    '#8B008B': 'Dark Magenta',
    '#00FA9A': 'Medium Spring Green',
    '#3CB371': 'Medium Sea Green',
    '#8B4513': 'Saddle Brown',
    '#20B2AA': 'Light Sea Green',
    '#778899': 'Light Slate Gray',
    '#D2691E': 'Chocolate',
    '#4682B4': 'Steel Blue',
    '#FF8C00': 'Dark Orange',
    '#ADFF2F': 'Green Yellow',
    '#7B68EE': 'Medium Slate Blue',
    '#CD5C5C': 'Indian Red',
    '#808080': 'Gray',
    '#008080': 'Teal',
    '#A9A9A9': 'Dark Gray',
    '#F5DEB3': 'Wheat',
    '#F5F5F5': 'White Smoke',
    '#000000': 'Black',
  };

  const handleAddToCart = () => {
    // Create an object representing the selected nail customization
    const selectedItem = {
      id: Math.random(),
      title: 'Custom Nail Set', // Title or name of the product
      description: `Nail Length: ${nailLength}, Nail Shape: ${nailShape}, Nail Color: ${colorNames[nailColor]}`,
      img: 'placeholder_image_url', // Replace placeholder_image_url with the actual image URL
      price: 25, // Hardcoded price for this customization
      quantity: 1, // Initial quantity
    };

    // Call addToCart function to add the selected item to the shopping cart
    addToCart(selectedItem);
  };

  const handleNailColorChange = color => {
    setNailColor(color.hex);
  };

  function handleNailLengthChange(value) {
    setNailLength(value);
  }
  function handleNailShapeChange(value) {
    setNailShape(value)
  }

  const handleAddOnsChange = addOn => {
    setAddOns({
      ...addOns,
      [addOn]: !addOns[addOn],
    });
  };

  const handleLinesChange = (type, option) => {
    setAddOns({
      ...addOns,
      lines: { type, option },
    });
  };
  const [selectedTech, setSelectedTech] = useState('');
  const [nailLengthOptions, setNailLengthOptions] = useState([
    { label: 'Natural (no length)', value: 'natural' },
    { label: 'Short', value: 'short' },
    { label: 'Medium', value: 'medium' },
    { label: 'Long', value: 'long' },
    { label: 'Extra Long', value: 'extra-long' },
  ]);
  const [nailShapeOptions, setNailShapeOptions] = useState([
    { label: 'Coffin', value: 'coffin' },
    { label: 'Square', value: 'square' },
    { label: 'Stilleto', value: 'stilleto' },
    { label: 'Almond', value: 'almond' },
    { label: 'Tapered Square', value: 'tapered-square' },
    { label: 'Lipstick', value: 'lipstick' },
  ]);
  const [addOns, setAddOns] = useState({
    Glitter: false,
    Halo: false,
    Chrome: false,
    FrenchTip: false,
    Charms: false,
    HandPainted: false,
  });
  return (
    <Layout>
      {/* <Box>
        <MyThree />
      </Box> */}
      <Box p={4} fontFamily="Poppins">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h1" mb={4} fontFamily="Poppins" color="#B0A08D">
            The Lab
          </Heading>
          <Text flexWrap="wrap" alignItems="center">
            Welcome to our Nail Lab! Select the options below to design the
            perfect nail set and we'll notify nearby nail techs of your order.
            Or search for techs nationwide in our{' '}
            <span color="purple" textDecoration="underline">
              Tech Locator ↗
            </span>
          </Text>
        </Flex>
        {/* Section for building the order */}
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <FormControl mb={4}>
              <FormLabel fontWeight="bold">Length</FormLabel>
              <Select
                placeholder="Select nail length"
                onChange={e => handleNailLengthChange(e.target.value)}
                value={nailLength}
              >
                {nailLengthOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl mb={4}>
              <FormLabel fontWeight="bold">Shape</FormLabel>
              <Select
                placeholder="Select nail shape"
                onChange={e => handleNailShapeChange(e.target.value)}
                value={nailShape}
              >
                {nailShapeOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl mb={4}>
              <FormLabel
                fontWeight="bold"
                cursor="pointer"
                onClick={() => setIsShapeCollapsed(!isShapeCollapsed)}
              >
                Add-Ons (per nail)
              </FormLabel>
              <Stack>
                {Object.keys(addOns).map(option => (
                  <Checkbox
                    key={option}
                    onChange={e => handleAddOnsChange(option)}
                    isChecked={addOns[option]}
                  >
                    {option}
                  </Checkbox>
                ))}
              </Stack>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl mb={4}>
              <FormLabel fontWeight="bold">Color</FormLabel>
              <ChromePicker
                color={nailColor}
                onChange={handleNailColorChange}
              />
            </FormControl>
          </GridItem>
          <Divider />
          <Divider />
          <GridItem>
            <Box>
              <Heading as="h2" size="md" mb={4}>
                Your Order Summary
              </Heading>
              <p>Nail Length: {nailLength}</p>
              <p>Nail Shape: {nailShape}</p>
              <p>Nail Color: {colorNames[nailColor]}</p>
              {/* <p>Nail Tech: {selectedTech}</p> */}
              <p>Price: $25</p> {/* Hardcoded price */}
            </Box>
            <Box mt={4}>
              <Button
                backgroundColor="#e3c4cc"
                border="none"
                size="md"
                width="8vw"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Customizer;
